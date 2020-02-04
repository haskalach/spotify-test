import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';
import { SpotifyAuthResponse } from '../models/spotify-auth-response';
import { fromPairs } from 'lodash';
@Injectable()
export class SharedService {
  loggedInActive = false;
  authUrl = environment.apiAuthUrl;
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { }
  // redirect to spotify login gate
  login() {
    window.location.href = this.buildAuthUrl();
  }
  // build url for spotify authentication process that joins all the params provided in the envirement config param
  buildAuthUrl(): string {
    const params = [];
    const requestAuthUrl = this.authUrl + 'authorize';
    for (const [key, value] of Object.entries(environment.authConfig)) {
      if (typeof (value) === 'object') {
        params.push(`${key}=${(value as string[]).join('')}`);
      } else {
        params.push(`${key}=${value}`);
      }
    }
    return `${requestAuthUrl}?${params.join('&')}`;
  }
  // artsist search function
  artistsSearch(searchQuery) {
    let params = new HttpParams();
    params = params.append('q', searchQuery);
    params = params.append('type', 'artist');
    return this.http.get(this.baseUrl + 'search', { params });
  }
  // validate exsistance of token
  loggedIn() {
    const token = localStorage.getItem('token');
    return token !== null;
  }
  // extract spotify returned response as an object to be able to get the token \
  extractApiResponse(fragment: string): SpotifyAuthResponse | null {
    if (!!fragment) {
      return fromPairs(fragment.split('&').map((s) => s.split('='))) as SpotifyAuthResponse;
    }
    return null;
  }

}
