import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumSearchComponent } from './pages/album-search/album-search.component';
import { ArtistSearchComponent } from './pages/artist-search/artist-search.component';
import { HomeComponent } from './pages/home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    AlbumSearchComponent,
    ArtistSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['api.spotify.com'],
        blacklistedRoutes: []
      }
    }),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
