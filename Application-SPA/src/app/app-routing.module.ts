import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistSearchComponent } from './pages/artist-search/artist-search.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumSearchComponent } from './pages/album-search/album-search.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'artist-search',
    component: ArtistSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'album-search/:id',
    component: AlbumSearchComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
