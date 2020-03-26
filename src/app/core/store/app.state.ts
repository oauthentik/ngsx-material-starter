import { appMenus } from "@app/config/menus";
import { UserRoles } from "@app/models/user";
import { Action, State, StateContext, StateToken, Selector } from "@ngxs/store";
import { LoadAppMenu, LoadAppDashboard } from "./actions/menu.actions";
import { AppStateDefaults, AppStateModel } from "./models/app-state.model";
import { dashboards } from "@app/config/dashboards";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Text } from "@app/models/dashboard";
export const APP_STATE_TOKEN = new StateToken<AppStateModel>("app_state");

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: AppStateDefaults
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
  constructor(private http: HttpClient) {}
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
    return this.http.get<any>("/assets/about.json").pipe(
      tap(blob => {
        (dashboards[role].widgets[0].content as Text).content = blob.content;
        ctx.patchState({
          dashboard: { ...dashboards[role] }
        });
      })
    );
  }
}
