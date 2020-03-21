import { LoginPayload } from "./models/auth.model";
import { AppStateModel, AppStateDefaults } from "./models/app-state.model";
import { State, Selector, StateToken, StateContext, Action } from "@ngxs/store";
import { Login, Logout } from "./actions/auth.action";
import { AuthService } from "../services";
import { tap } from "rxjs/operators";
import { LoadAppMenu } from "./actions/menu.actions";
import { UserRoles } from "@app/models/user";
import { appMenus } from "@app/config/menus";
const APP_STATE_TOKEN = new StateToken<AppStateModel>("app_state");

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: AppStateDefaults
})
export class AppState {
  constructor(private authService: AuthService) {}

  @Action(LoadAppMenu)
  loadAppMenu(ctx: StateContext<AppStateModel>, role: UserRoles) {
    ctx.patchState({
      menus: appMenus.filter(menu => menu.access.includes(role))
    });
  }
  @Action(Login)
  login(ctx: StateContext<AppStateModel>, payload: LoginPayload) {
    ctx.patchState({
      auth: { authenticating: true, ...ctx.getState().auth }
    });
    return this.authService.login(payload).pipe(
      tap(auth => {
        ctx.patchState({ auth });
      })
    );
  }
  @Action(Logout)
  logout(ctx: StateContext<AppStateModel>) {
    return this.authService.logout().pipe(
      tap(ok => {
        ctx.setState(AppStateDefaults);
      })
    );
  }
}
@State({
  name: "auth"
})
export class AuthState extends AppState {
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
}
