import { MenuItem } from "@app/models/menu";
import { IconType } from "@app/models/icons";

export const appMenus: Partial<MenuItem>[] = [
  {
    label: "Login",
    slugs: ["/login"],
    icon: { name: "login", type: IconType.Material },
    placement: "both",
  },
];
