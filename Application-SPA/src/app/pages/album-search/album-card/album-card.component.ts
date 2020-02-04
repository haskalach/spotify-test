import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() albums: Album[];
  constructor() { }

  ngOnInit() {
    console.log('albums', this.albums)
  }

}
