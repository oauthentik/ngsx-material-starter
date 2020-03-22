export interface User {
  userId: number;
  username: string;
  displayName: string;
  isAdmin: boolean;
  role: UserRoles;
}
export enum UserRoles {
  Moderator,
  Guest
}
