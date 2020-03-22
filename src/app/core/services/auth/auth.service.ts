import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { API_ROUTES } from "@app/config/api-index";
import { AuthStateModel } from "@app/core/store/models/auth.model";
import { Api } from "@app/models/api";
import * as jwt_decode from "jwt-decode";
import { of, Observable } from "rxjs";
import { tap, switchMap, catchError } from "rxjs/operators";
import { API } from "@app/config/di";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { AppAuthStateDefaults } from "@app/core/store/models/app-state.model";
import { MessageService } from "@app/core/services/message.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private messageService: MessageService,
    @Inject(API) private api: Api
  ) {}

  login(credentials) {
    return this.http
      .post<AuthStateModel>(
        `${this.api.url}/${this.api.index.AuthLogin}`,
        credentials
      )
      .pipe(
        tap((data: any) => {
          if (data && data.access) {
            this.localStorageService.setItem("AUTH_TOKEN", data["access"]);
            this.localStorageService.setItem("REFRESH_TOKEN", data["refresh"]);
          }
        }),
        switchMap((data: any) => {
          if (data) {
            return of({
              user: this.decodeToken(data.access),
              token: data.access,
              refresh: data.refresh,
              tokenExpireAt: data.expire_at,
              authenticating: false,
              error: null
            }) as Observable<AuthStateModel>;
          }
          return of({
            ...AppAuthStateDefaults,
            error: this.messageService.getMessageText(
              "auth.invalid-credentials"
            )
          });
        }),
        catchError(err => {
          return of({
            ...AppAuthStateDefaults,
            authenticating: false,
            error: err.message
          });
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
    } catch (error) {
      return null;
    } finally {
      return null;
    }
  }
}
