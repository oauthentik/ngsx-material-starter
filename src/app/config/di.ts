import { InjectionToken } from "@angular/core";
import { AppRoutes } from "./routes";
import { Api } from "@app/models/api";
import { Message } from "@app/models/message";
import { appIcons } from "./icons";

export const API: InjectionToken<Api> = new InjectionToken("APP_API");
export const AVATAR: InjectionToken<string> = new InjectionToken("APP_AVATAR");
export const APP_LOGO: InjectionToken<string> = new InjectionToken("APP_LOGO");
export const APP_NAME: InjectionToken<string> = new InjectionToken("APP_NAME");
export const BASE_HREF: InjectionToken<string> = new InjectionToken(
  "BASE_HREF"
);
export const APP_IMAGES: InjectionToken<string[]> = new InjectionToken(
  "APP_IMAGES"
);
export const APP_ICONS: InjectionToken<typeof appIcons> = new InjectionToken(
  "APP_ICONS"
);

export const APP_ROUTES: InjectionToken<AppRoutes> = new InjectionToken(
  "APP_ROUTES"
);
export const APP_MESSAGES: InjectionToken<Message[]> = new InjectionToken(
  "APP_MESSAGES"
);
export const MESSAGE_TYPE_ICONS: InjectionToken<any> = new InjectionToken(
  "APP_MESSAGE_TYPE_ICONS"
);
export const MESSAGE_TYPE_CLASS: InjectionToken<any> = new InjectionToken(
  "APP_MESSAGE_TYPE_CLASS"
);
