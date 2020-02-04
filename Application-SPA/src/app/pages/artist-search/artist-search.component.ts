import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ArtistResponse, Artist, ArtistInterfaceEntity } from 'src/app/models/artist';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  searchQuery = '';
  artistsResult: Artist[];
  constructor(private sharedservice: SharedService) { }

  ngOnInit() {

  }
  artistSearch() {
    this.sharedservice.artistsSearch(this.searchQuery).subscribe((next: ArtistInterfaceEntity) => {
      console.log({ next });
      this.artistsResult = next.artists.items;
      console.log('', this.artistsResult);
    });
  }
}
