import { User, UserRoles } from "@app/models/user";
import { LoginPayload } from "@app/core/store/models/auth.model";
export const mockCredentials: LoginPayload = {
  username: "admin",
  password: "admin",
};
export const mockUser: User = {
  userId: 1,
  username: "admin",
  displayName: "Admin ",
  isAdmin: true,
  role: UserRoles.Moderator,
};
export const mockUserToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYW
                              RtaW4iLCJpYXQiOjE1ODYyNTU2NzUsImV4cCI6MTU4NjI3MzY3NX0.Wol9Bq8sKcCXp7bgdEP
                              lGzUl0YrfAWAdkII962ZouGo`;
export const mockAuthState = {
  user: mockUser,
  token: mockUserToken,
  refresh: mockUserToken,
  tokenExpireAt: 1586255693,
  authenticating: false,
  error: null,
};
