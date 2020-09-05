import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private httpClient: HttpClient) { }
    getUserLis(): Observable<any> {
        return this.httpClient.get<any>(`/api/0.8/?results=20`);
    }
    login(username: string, password: string) {
        return this.httpClient.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    // this.currentUserSubject.next(user);
                }

                return user;
            }));
    }
}
