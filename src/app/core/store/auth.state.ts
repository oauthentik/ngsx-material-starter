import { Inject } from "@angular/core";
import { Router } from "@angular/router";
import { APP_ROUTES, BASE_HREF } from "@app/config/di";
import { AppRoutes } from "@app/config/routes";
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { AuthService } from "../services/auth/auth.service";
import { Login, Logout } from "./actions/auth.action";
import {
  AppAuthStateDefaults,
  AppStateDefaults,
  AppStateModel
} from "./models/app-state.model";
import { LoginPayload } from "./models/auth.model";
export const APP_STATE_TOKEN = new StateToken<AppStateModel>("app_state");

@State({
  name: "auth",
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
    private router: Router,
    @Inject(BASE_HREF) private baseHref,
    @Inject(APP_ROUTES) private appRoutes: typeof AppRoutes
  ) {}
  @Action(Login)
  login(ctx: StateContext<AppStateModel>, payload: LoginPayload) {
    console.log("loginng yeah");

    ctx.patchState({
      auth: { authenticating: true, ...ctx.getState().auth }
    });
    return this.authService.login(payload).pipe(
      tap(auth => {
        console.log("In auth service ", auth.error);
        ctx.patchState({ auth });
        if (!auth.error && auth.user) {
          this.router.navigate([this.baseHref]);
        }
      })
    );
  }
  @Action(Logout)
  logout(ctx: StateContext<AppStateModel>) {
    return this.authService.logout().pipe(
      tap(ok => {
        ctx.setState(AppStateDefaults);
        this.router.navigate([this.baseHref, this.appRoutes.Login]);
      })
    );
  }
}
