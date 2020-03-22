import { LoginPayload } from "./../models/auth.model";
export class Login {
  static readonly type = "[Auth] Login";
  constructor(public payload: LoginPayload) {}
}
export class Logout {
  static readonly type = "[Auth] Logout";
}
export class RefreshToken {
  static readonly type = "[Auth] RefreshToken";
  constructor(public payload: string) {}
}
export class ClearCredentials {
  static readonly type = "[Auth] ClearCredentials";
}
