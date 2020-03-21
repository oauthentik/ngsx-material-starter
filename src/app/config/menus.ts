import { MenuItem } from "@app/models/menu";

export const appMenus: Partial<MenuItem>[] = [
  {
    label: "Login",
    slugs: ["/login"],
    icon: "login",
    placement: "both"
  }
];
