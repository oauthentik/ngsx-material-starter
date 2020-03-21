import { LoginPayload } from "./../models/auth.model";
export class Login {
  static readonly type = "[Auth] Login";
  constructor(public payload: LoginPayload) {}
}
export class Logout {
  static readonly type = "[Auth] Logout";
}
export class SaveCredentials {
  static readonly type = "[Auth] SaveCredentials";
}
export class ClearCredentials {
  static readonly type = "[Auth] ClearCredentials";
}
