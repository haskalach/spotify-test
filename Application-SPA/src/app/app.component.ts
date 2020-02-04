import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from './services/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    console.log('init')
    if (this.sharedService.loggedIn()) {
      this.sharedService.loggedInActive = true;
    }
  }

  logOut() {
    this.sharedService.logOut();
  }
}
