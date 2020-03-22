import { Inject } from "@angular/core";
import { APP_ROUTES, BASE_HREF } from "@app/config/di";
import { AppRoutes } from "@app/config/routes";
import { Navigate } from "@ngxs/router-plugin";
import {
  Action,
  Selector,
  State,
  StateContext,
  StateToken,
  Store
} from "@ngxs/store";
import { tap, switchMap, catchError } from "rxjs/operators";
import { AuthService } from "../services/auth/auth.service";
import { Login, Logout, RefreshToken } from "./actions/auth.action";
import { AppAuthStateDefaults, AppStateModel } from "./models/app-state.model";
import { AuthStateModel, LoginPayload } from "./models/auth.model";
import { NotificationsService } from "../services/notifications/notifications.service";
import { of } from "rxjs";
export const APP_STATE_TOKEN = new StateToken<AppStateModel>("app_state");
export const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>("auth");

@State({
  name: AUTH_STATE_TOKEN,
  defaults: AppAuthStateDefaults
})
export class AuthState {
  @Selector()
  static isAuthenticating(state: AuthStateModel) {
    return state.authenticating;
  }
  @Selector()
  static authErrors(state: AuthStateModel) {
    return state.error;
  }

  @Selector()
  static user(state: AuthStateModel) {
    return state.user;
  }
  constructor(
    private authService: AuthService,
    private store: Store,
    private notify: NotificationsService,
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
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    const payload: LoginPayload = action.payload;
    ctx.setState({
      authenticating: true,
      ...AppAuthStateDefaults
    });
    return this.authService.login(payload).pipe(
      tap(auth => {
        ctx.patchState({ ...auth });
      }),
      switchMap(authState => {
        if (this.isAuthorized()) {
          return this.authService.getUser(authState.user.userId).pipe(
            tap(
              user => {
                this.notify.success(
                  "Connected! Welcome " + authState.user.username
                );
                ctx.patchState({ ...authState, user });
                this.store.dispatch(new Navigate([this.baseHref]));
              },
              err => {
                this.notify.error(
                  `${err.statusText} ! Cannot load profile for ${authState.user.username}`
                );
              }
            )
          );
        }
        return of(null);
      })
    );
  }
  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    ctx.setState(AppAuthStateDefaults);
    this.store.dispatch(new Navigate([this.baseHref, this.appRoutes.Login]));
  }

  @Action(RefreshToken)
  refreshToken(ctx: StateContext<AuthStateModel>, action: RefreshToken) {
    ctx.patchState({
      refresh: action.payload
    });
    this.store.dispatch(new Navigate([this.baseHref]));
  }
}
