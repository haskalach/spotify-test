import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ArtistResponse, Artist, ArtistInterfaceEntity } from 'src/app/models/artist';
import { Pagination } from 'src/app/models/main-entity';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  searchQuery = '';
  artistsResult: Artist[];
  pagination: Pagination = {
    currentPage: 1,
    offset: 0,
    limit: 20,
    total: 0,
    totalPages: 0
  };
  constructor(private sharedservice: SharedService) { }

  ngOnInit() {

  }
  // reset pagination and fetch new data with the applied query
  artistSearch() {
    this.pagination.currentPage = 1;
    this.pagination.offset = 0;
    this.pagination.limit = 20;
    this.loadItems(this.searchQuery, this.pagination.offset, this.pagination.limit);
  }
  // once page changed
  // set current page
  // calculate the current offset
  // load new items
  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.pagination.offset = (this.pagination.currentPage - 1) * this.pagination.limit;
    this.loadItems(
      this.searchQuery,
      this.pagination.offset,
      this.pagination.limit
    );
  }
  // pagination is added
  // it turned out spotify have a Bug with pagination (both checked application and developer site )
  // example search for hamada ,did not have time to test it elsewhere
  loadItems(searchquery, offset, limit) {
    this.sharedservice.artistsSearch(searchquery, offset, limit).subscribe((next: ArtistInterfaceEntity) => {
      this.artistsResult = next.artists.items;
      this.pagination.total = next.artists.total;
    });
  }
}
