import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStoreService } from '../services/token-store.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
    constructor(private _tokenService: TokenStoreService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = this._tokenService.getToken();
        console.log('Token :-',token);
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }     
        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true }
];