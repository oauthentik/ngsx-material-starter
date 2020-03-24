import { appMenus } from "@app/config/menus";
import { UserRoles } from "@app/models/user";
import { Action, State, StateContext, StateToken, Selector } from "@ngxs/store";
import { LoadAppMenu, LoadAppDashboard } from "./actions/menu.actions";
import { AppStateDefaults, AppStateModel } from "./models/app-state.model";
import { dashboards } from "@app/config/dashboards";
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

  @Action(LoadAppDashboard)
  loadAppDashboard(
    ctx: StateContext<AppStateModel>,
    { role = UserRoles.Guest }
  ) {
    ctx.patchState({
      dashboard: { ...dashboards[role] }
    });
  }
}
