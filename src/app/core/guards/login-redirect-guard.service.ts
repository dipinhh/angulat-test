import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectGuard implements CanActivate {
 currentUser: string;
  constructor(private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.currentUser = localStorage.getItem('currentUser');
    if (!!this.currentUser) {
      this.router.navigate(['home/userList']);
      return false;
    } else {
      return true;

    }

  }
}
