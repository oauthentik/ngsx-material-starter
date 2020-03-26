import { UserRoles } from "@app/models/user";
export class LoadAppMenu {
  static readonly type = "[App] Menu";
  constructor(public role: UserRoles, ...args) {}
}

export class LoadAppDashboard {
  static readonly type = "[App] Dashboard";
  constructor(public role: UserRoles, ...args) {}
}
