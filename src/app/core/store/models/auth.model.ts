import { User } from "@app/models/user";

export interface AuthStateModel {
  user: User;
  token: string;
  refresh: string;
  tokenExpireAt: number;
  authenticating: boolean;
  error: Error | null;
}
export interface LoginPayload {
  username: string;
  password: string;
}
