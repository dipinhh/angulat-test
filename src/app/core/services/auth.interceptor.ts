import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { timeInterval, windowTime, finalize, tap } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders();

        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        const apiUrl = environment.API.URL + req.urlWithParams;
        const token = localStorage.getItem('access_token');

        // tslint:disable-next-line:object-literal-shorthand
        const anonymousReq = req.clone({ url: apiUrl, headers: headers });
        return next.handle(anonymousReq).pipe((tap(res => {
        }))
            // delay(1000),
            // finalize(() => this.loaderService.loaderStatus.next(false))
            );
    }
}
