import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthGuardsService implements CanActivate, CanActivateChild {
    currentUser: string;

    constructor(private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        this.currentUser = localStorage.getItem('currentUser');
        if (!!this.currentUser) {
            return !!this.currentUser;
        } else {
            this.router.navigate(['login']);
        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        this.currentUser = localStorage.getItem('currentUser');
        const currentUserRole = localStorage.getItem('role');
        if (currentUserRole) {
            return true;
        }
        return !!this.currentUser;
    }

}
