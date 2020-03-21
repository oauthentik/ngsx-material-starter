export interface User {
  username: string;
  displayName: string;
  isAdmin: boolean;
  role: UserRoles;
}
export enum UserRoles {
  Moderator,
  Guest
}
