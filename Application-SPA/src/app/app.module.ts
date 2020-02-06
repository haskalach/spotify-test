import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlbumSearchComponent } from './pages/album-search/album-search.component';
import { ArtistSearchComponent } from './pages/artist-search/artist-search.component';
import { HomeComponent } from './pages/home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { ArtistCardComponent } from './pages/artist-search/artist-card/artist-card.component';
import { RatingModule } from 'ng-starrating';
import { AlbumCardComponent } from './pages/album-search/album-card/album-card.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    AlbumSearchComponent,
    ArtistSearchComponent,
    HomeComponent,
    ArtistCardComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['api.spotify.com'],
        blacklistedRoutes: []
      }
    }),
    NgxNavbarModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
