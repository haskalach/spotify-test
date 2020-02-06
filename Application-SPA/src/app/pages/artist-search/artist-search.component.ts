import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Artist, ArtistInterfaceEntity } from 'src/app/models/artist';
import { Pagination } from 'src/app/models/main-entity';
import { SubscriptionLike as ISubscription } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  artistsResult: Artist[] = [];
  pagination: Pagination = {
    currentPage: 1,
    offset: 0,
    limit: 20,
    total: 0,
    totalPages: 0
  };
  @ViewChild('search', { static: true }) SearchControl;
  // to monitor if theres a current Active load Item
  pendingData: ISubscription;
  pending = false;
  constructor(public sharedservice: SharedService) { }

  ngOnInit() {
    if (this.sharedservice.searchQuery !== '') {
      this.SearchControl.control.setValue(this.sharedservice.searchQuery);
    }
    this.SearchControl.valueChanges.subscribe(next => {
      console.log({ next })
      this.artistSearch();
    });
  }
  // save applied Search To The shared Service Search Query
  // reset pagination and fetch new data with the applied query
  artistSearch() {
    this.pagination.currentPage = 1;
    this.pagination.offset = 0;
    this.pagination.limit = 20;
    this.sharedservice.searchQuery = this.SearchControl.value;
    if (this.sharedservice.searchQuery !== '') {
      this.loadItems(this.sharedservice.searchQuery, this.pagination.offset, this.pagination.limit);
    } else {
      // in case final search was empty and still there is pending data
      if (this.pending === true) {
        this.pendingData.unsubscribe();
      }
      this.pagination.total = 0;
      this.artistsResult = [];
    }

  }
  // once page changed
  // set current page
  // calculate the current offset
  // load new items
  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.pagination.offset = (this.pagination.currentPage - 1) * this.pagination.limit;
    this.loadItems(
      this.sharedservice.searchQuery,
      this.pagination.offset,
      this.pagination.limit
    );
  }
  // pagination is added
  // it turned out spotify have a Bug with pagination (both checked application and developer site )
  // example search for hamada ,did not have time to test it elsewhere
  loadItems(searchquery, offset, limit) {
    // if current pending earch cancel it
    if (this.pending === true) {
      this.pendingData.unsubscribe();
    }
    // if not set pending and apply the api
    this.pending = true;
    this.pendingData = this.sharedservice.artistsSearch(searchquery, offset, limit).subscribe((next: ArtistInterfaceEntity) => {
      this.artistsResult = next.artists.items;
      this.pagination.total = next.artists.total;
    });


  }
}
