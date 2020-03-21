export interface Menu {
  label: string;
  priority?: number;
  slugs: any[];
  queryParams?: any;
  icon?: string;
  redirect?: boolean;
  active?: boolean;
  disabled?: boolean;
  children?: Menu[];
  hidden?: boolean;
}
