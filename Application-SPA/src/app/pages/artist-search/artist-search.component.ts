import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  searchQuery = '';
  constructor(private sharedservice: SharedService) { }

  ngOnInit() {

  }
  artistSearch() {
    this.sharedservice.artistsSearch(this.searchQuery).subscribe(next => {
      console.log({ next });
    })
  }
}
