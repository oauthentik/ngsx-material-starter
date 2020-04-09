import { dashboards } from "@app/config/dashboards";
import { appMenus } from "@app/config/menus";
import { UserRoles } from "@app/models/user";
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { LoadAppDashboard, LoadAppMenu } from "./actions/menu.actions";
import { AppStateDefaults, AppStateModel } from "./models/app-state.model";
export const APP_STATE_TOKEN = new StateToken<AppStateModel>("app_state");

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: AppStateDefaults,
})
export class AppState {
  @Selector()
  static getMenus(state: AppStateModel) {
    return state.menus;
  }

  @Selector()
  static getBreadcrumbs(state: AppStateModel) {
    return state.breadcrumb;
  }
  @Selector()
  static getDashboard(state: AppStateModel) {
    return state.dashboard;
  }
  constructor() {}
  @Action(LoadAppMenu)
  loadAppMenu(ctx: StateContext<AppStateModel>, role: UserRoles) {
    ctx.patchState({
      menus: appMenus.filter((menu) => menu.access.includes(role)),
    });
  }

  @Action(LoadAppDashboard)
  loadAppDashboard(
    ctx: StateContext<AppStateModel>,
    { role = UserRoles.Guest }
  ) {
    ctx.patchState({
      dashboard: { ...dashboards[role] },
    });
  }
}
