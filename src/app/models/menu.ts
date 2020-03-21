import { UserRoles } from "./user";

export interface MenuItem {
  id: string;
  label: string;
  disabled: boolean;
  slugs: any[];
  queryParams: any;
  icon: string;
  children: MenuItem[];
  access: UserRoles[];
  group: string;
}
