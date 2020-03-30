import { Dashboard } from "@app/models/dashboard";
import { MenuItem } from "@app/models/menu";

export interface AppStateModel {
  menus: Partial<MenuItem>[];
  dashboard: Dashboard;
  about: string;
  breadcrumb: Partial<MenuItem>[];
}

export const AppStateDefaults: AppStateModel = {
  menus: [],
  about: "",
  dashboard: {
    widgets: []
  },
  breadcrumb: null
};
