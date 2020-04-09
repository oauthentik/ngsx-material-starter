import { UserRoles } from "./user";
import { Icon } from "./icons";

export interface MenuItem {
  id: string;
  label: string;
  disabled: boolean;
  slugs: any[];
  queryParams: any;
  icon: Icon;
  children: MenuItem[];
  access: UserRoles[];
  placement: "sidebar" | "breadcrumb" | "both";
}
