import { MenuItem } from "@app/models/menu";
import { AuthStateModel } from "./auth.model";

export interface AppStateModel {
  menus: Partial<MenuItem>[];
  auth: AuthStateModel;
  breadcrumb: Partial<MenuItem>[];
}

export const AppStateDefaults: AppStateModel = {
  menus: [],
  auth: {
    token: null,
    refresh: null,
    tokenExpireAt: null,
    error: null,
    authenticating: false,
    user: null
  },
  breadcrumb: null
};
