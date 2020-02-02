import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  searchQuery = '';
  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.fragment);
    if (this.route.snapshot.fragment) {
      const reponse = this.sharedService.extractApiResponse(this.route.snapshot.fragment);
      // const json = JSON.parse(this.route.snapshot.fragment);
      console.log({ reponse });
      localStorage.setItem('token', reponse.access_token);
      this.router.navigate(['/artist-search']);
    }

  }

}
