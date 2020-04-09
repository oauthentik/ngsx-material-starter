import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { API } from "@app/config/di";
import { MessageService } from "@app/core/services/message.service";
import { Api } from "@app/models/api";
import { User } from "@app/models/user";
import { Store } from "@ngxs/store";
import * as jwt_decode from "jwt-decode";
import { Observable, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import {
  AuthStateModel,
  AppAuthStateDefaults,
} from "../../store/models/auth.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    @Inject(API) private api: Api,
    private store: Store
  ) {}
  getUser(id: any) {
    return this.http.get<User>(`${this.api.url}/${this.api.index.Users}/${id}`);
  }
  getUsers() {
    return this.http.get<User[]>(`${this.api.url}/${this.api.index.Users}`);
  }
  login(credentials) {
    return this.http
      .post<AuthStateModel>(
        `${this.api.url}/${this.api.index.AuthLogin}`,
        credentials
      )
      .pipe(
        switchMap((data: any) => {
          if (data) {
            return of({
              user: this.decodeToken(data.token),
              token: data.token,
              refresh: data.token,
              tokenExpireAt: data.expiresIn,
              authenticating: false,
              error: null,
            }) as Observable<AuthStateModel>;
          }
          return of({
            ...AppAuthStateDefaults,
            error: this.messageService.getMessageText(
              "auth.invalid-credentials"
            ),
          });
        }),
        catchError((err) => {
          return of({
            ...AppAuthStateDefaults,
            authenticating: false,
            error:
              err.status === 401
                ? this.messageService.getMessageText("auth.invalid-credentials")
                : `${err.status} - ${err.message}`,
          });
        })
      );
  }

  logout() {
    return of(this.store.reset({}));
  }

  decodeToken(token) {
    return jwt_decode(token);
  }
}
