import { User } from "@app/models/user";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

export interface AuthStateModel {
  user: User;
  token: string;
  refresh: string;
  tokenExpireAt: number;
  authenticating: boolean;
  error: string | null;
}
export interface LoginPayload {
  username: string;
  password: string;
}
