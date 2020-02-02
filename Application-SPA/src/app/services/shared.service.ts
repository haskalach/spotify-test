import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';
import { SpotifyAuthResponse } from '../models/spotify-auth-response';
import { fromPairs } from 'lodash';
@Injectable()
export class SharedService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { }
  login() {
    window.location.href = this.buildAuthUrl();
  }
  buildAuthUrl(): string {

    const params = [];
    const requestAuthUrl = this.baseUrl + 'authorize';
    for (const [key, value] of Object.entries(environment.authConfig)) {
      if (typeof (value) === 'object') {
        params.push(`${key}=${(value as string[]).join('')}`);
      } else {
        params.push(`${key}=${value}`);
      }
    }

    return `${requestAuthUrl}?${params.join('&')}`;
  }
  albumSearch(searchQuery) {
    let params = new HttpParams();
    params = params.append('q', searchQuery);
    params = params.append('type', 'artist');
    return this.http.get(this.baseUrl + 'console/get-search-item', { params });
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  extractApiResponse(fragment: string): SpotifyAuthResponse | null {
    if (!!fragment) {
      return fromPairs(fragment.split('&').map((s) => s.split('='))) as SpotifyAuthResponse;
    }
    return null;
  }
}
