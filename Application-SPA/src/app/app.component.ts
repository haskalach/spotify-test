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
  }

  logOut() {
    localStorage.removeItem('token');
    this.sharedService.loggedInActive = false;
    this.router.navigate(['/']);
  }
}
