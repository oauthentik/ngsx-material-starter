import { Dashboard } from "@app/models/dashboard";
import { MenuItem } from "@app/models/menu";
import { AuthStateModel } from "./auth.model";

export interface AppStateModel {
  menus: Partial<MenuItem>[];
  dashboard: Dashboard;
  about: string;
  breadcrumb: Partial<MenuItem>[];
}
export const AppAuthStateDefaults: AuthStateModel = {
  token: null,
  refresh: null,
  tokenExpireAt: null,
  error: null,
  authenticating: false,
  user: null
};
export const AppStateDefaults: AppStateModel = {
  menus: [],
  about: "",
  dashboard: {
    widgets: []
  },
  breadcrumb: null
};
