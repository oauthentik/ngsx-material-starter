import { User } from "@app/models/user";

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

export const AppAuthStateDefaults: AuthStateModel = {
  token: null,
  refresh: null,
  tokenExpireAt: null,
  error: null,
  authenticating: false,
  user: null,
};
