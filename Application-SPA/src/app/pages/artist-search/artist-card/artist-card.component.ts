import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input() artists: Artist[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToAlbum(artistId: string) {
    this.router.navigate(['/album-search/' + artistId]);
  }
}
