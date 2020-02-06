import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Album, AlbumResponse } from 'src/app/models/album';


@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.css']
})
export class AlbumSearchComponent implements OnInit {
  id: string;
  albumsResult: Album[];
  ArtistName;
  constructor(private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.sharedService.albumSearch(this.id).subscribe((next: AlbumResponse) => {
          this.albumsResult = next.items;
          this.ArtistName = this.albumsResult[0].artists.find(x => x.id === this.id).name;
        });
      }
    });
  }

}
