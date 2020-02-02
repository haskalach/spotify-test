import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private shared: SharedService,
    private router: Router
  ) { }
  canActivate(): boolean {
    if (this.shared.loggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
