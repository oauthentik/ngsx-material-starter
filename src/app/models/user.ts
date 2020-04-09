import { Table, Column } from "mat-table-advanced";

export interface User {
  userId: number;
  username: string;
  displayName: string;
  isAdmin: boolean;
  role: UserRoles;
}
export enum UserRoles {
  Moderator = "admin",
  Guest = "guest",
}
@Table
export class UserModel {
  @Column({
    verboseName: "User ID",
    canSort: true,
    sortBy: "desc",
    format: null,
  })
  id: number;
  @Column({ verboseName: "User name", canSort: true })
  username: string;
  @Column({ verboseName: "Role", canSort: true })
  role: UserRoles;
}
