import { IconName } from "@fortawesome/fontawesome-svg-core";

export type AppIcons = Icon | string;

export enum IconType {
  FontAwesome = "fontawesome",
  Material = "material"
}
export enum IconSize {
  Default = 0,
  Medium,
  Large,
  XLarge
}
export interface Icon {
  name: string | IconName;
  type: IconType;
  size?: IconSize;
}
