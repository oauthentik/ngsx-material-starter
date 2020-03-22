import { appMenus } from "@app/config/menus";
import { UserRoles } from "@app/models/user";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { LoadAppMenu } from "./actions/menu.actions";
import { AppStateDefaults, AppStateModel } from "./models/app-state.model";
export const APP_STATE_TOKEN = new StateToken<AppStateModel>("app_state");

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: AppStateDefaults
})
export class AppState {
  @Action(LoadAppMenu)
  loadAppMenu(ctx: StateContext<AppStateModel>, role: UserRoles) {
    ctx.patchState({
      menus: appMenus.filter(menu => menu.access.includes(role))
    });
  }
}
