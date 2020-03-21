import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { AuthStateModel } from "@app/core/store/models/auth.model";
import { Api } from "@app/models/api";
import * as jwt_decode from "jwt-decode";
import { Observable, of } from "rxjs";
import { catchError, switchMap, tap } from "rxjs/operators";
import { API } from "src/app/config/di";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    @Inject(API) private api: Api
  ) {}

  login(credentials) {
    return this.http
      .post<AuthStateModel>(
        `${this.api.url}/${this.api.index["auth/login"]}`,
        credentials
      )
      .pipe(
        catchError(err => {
          return of({
            authenticating: false,
            error: err
          });
        }),
        tap((data: any) => {
          if (data && data.access) {
            this.localStorageService.setItem("AUTH_TOKEN", data["access"]);
            this.localStorageService.setItem("REFRESH_TOKEN", data["refresh"]);
          }
        }),
        switchMap((data: any) => {
          return of({
            user: this.decodeToken(data.access),
            token: data.access,
            refresh: data.refresh,
            tokenExpireAt: data.expire_at,
            authenticating: false,
            error: null
          }) as Observable<AuthStateModel>;
        })
      );
  }

  logout() {
    this.localStorageService.removeItem("AUTH_TOKEN");
    this.localStorageService.removeItem("REFRESH_TOKEN");
    return of(true);
  }

  getAuthorizationToken() {
    return this.localStorageService.getItem("AUTH_TOKEN");
  }
  getRefreshToken() {
    return this.localStorageService.getItem("REFRESH_TOKEN");
  }
  isAuthorized() {
    const token = this.getAuthorizationToken();
    return token && token.length > 0;
  }
  decodeToken(token = this.getAuthorizationToken()) {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    } finally {
      return null;
    }
  }
}
