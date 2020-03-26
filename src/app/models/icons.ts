import { appIcons } from "@app/config/icons";

export type AppIcons = typeof appIcons;
export interface Icon {
  name: string;
  type: "fontawesome" | "material";
}
