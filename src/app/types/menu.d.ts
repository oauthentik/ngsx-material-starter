import { Icon } from "@app/models/icons";

export interface Menu {
  label: string;
  priority?: number;
  slugs: any[];
  queryParams?: any;
  icon?: Icon;
  redirect?: boolean;
  active?: boolean;
  disabled?: boolean;
  children?: Menu[];
  hidden?: boolean;
}
