import { Inject } from "@angular/core";
import { Router } from "@angular/router";
import { APP_ROUTES, BASE_HREF } from "@app/config/di";
import { AppRoutes } from "@app/config/routes";
import {
  Action,
  Selector,
  State,
  StateContext,
  StateToken,
  Store
} from "@ngxs/store";
import { tap } from "rxjs/operators";
import { AuthService } from "../services/auth/auth.service";
import { Login, Logout } from "./actions/auth.action";
import { Navigate } from "@ngxs/router-plugin";
import {
  AppAuthStateDefaults,
  AppStateDefaults,
  AppStateModel
} from "./models/app-state.model";
import { LoginPayload, AuthStateModel } from "./models/auth.model";
export const APP_STATE_TOKEN = new StateToken<AppStateModel>("app_state");
export const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>("auth");

@State({
  name: AUTH_STATE_TOKEN,
  defaults: AppAuthStateDefaults
})
export class AuthState {
  @Selector()
  static isAuthenticating(state: AppStateModel) {
    return state.auth.authenticating;
  }
  @Selector()
  static authErrors(state: AppStateModel) {
    return state.auth.error;
  }

  @Selector()
  static user(state: AppStateModel) {
    return state.auth.user;
  }
  constructor(
    private authService: AuthService,
    private store: Store,
    @Inject(BASE_HREF) private baseHref,
    @Inject(APP_ROUTES) private appRoutes: typeof AppRoutes
  ) {}

  getAuthorizationToken() {
    const authState: AuthStateModel = this.store.selectSnapshot(
      AUTH_STATE_TOKEN
    );

    return authState ? authState.token : null;
  }
  isTokenExpired() {
    const authState: AuthStateModel = this.store.selectSnapshot(
      AUTH_STATE_TOKEN
    );

    return authState && authState.tokenExpireAt > Date.now();
  }
  getRefreshToken() {
    const authState: AuthStateModel = this.store.selectSnapshot(
      AUTH_STATE_TOKEN
    );
    return authState ? authState.refresh : null;
  }
  isAuthorized() {
    const token = this.getAuthorizationToken() || this.getRefreshToken();
    return token && !this.isTokenExpired();
  }
  @Action(Login)
  login(ctx: StateContext<AppStateModel>, payload: LoginPayload) {
    ctx.patchState({
      auth: { authenticating: true, ...ctx.getState().auth }
    });
    return this.authService.login(payload).pipe(
      tap(auth => {
        ctx.patchState({ auth });
        if (this.isAuthorized()) {
          this.store.dispatch(new Navigate([this.baseHref]));
        }
      })
    );
  }
  @Action(Logout)
  logout(ctx: StateContext<AppStateModel>) {
    ctx.setState(AppStateDefaults);
    this.store.dispatch(new Navigate([this.baseHref, this.appRoutes.Login]));
  }
}
