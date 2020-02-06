import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sharedService: SharedService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.fragment) {
      const reponse = this.sharedService.extractApiResponse(this.route.snapshot.fragment);
      // const json = JSON.parse(this.route.snapshot.fragment);
      localStorage.setItem('token', reponse.access_token);
      this.sharedService.loggedInActive = true;
      this.router.navigate(['/artist-search']);
    } else {
      if (this.sharedService.loggedIn()) {
        this.router.navigate(['/artist-search']);
      }
    }
  }
  logIn() {
    this.sharedService.login();
  }

}
