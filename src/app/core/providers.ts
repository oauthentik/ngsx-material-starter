import { NotificationsService } from "./services/notifications/notifications.service";
import { LocalStorageService } from "./services/local-storage/local-storage.service";
import { AnimationsService } from "./services/animations/animations.service";
import { AuthService } from "./services/auth/auth.service";
import {
  APP_NAME,
  APP_LOGO,
  APP_IMAGES,
  BASE_HREF,
  APP_ROUTES,
  APP_MESSAGES,
  MESSAGE_TYPE_CLASS,
  MESSAGE_TYPE_ICONS
} from "./../config/di";
import { environment } from "@env/environment";
import { Provider } from "@angular/core";
import { API } from "../config/di";
import { API_ROUTES } from "../config/api-index";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { logoutPlugin } from "./store/plugins/clean-on-logout";
import { NGXS_PLUGINS } from "@ngxs/store";
import { AuthGuardService } from "./guards/auth-guard.service";
import { AppRoutes } from "@app/config/routes";
import { AppImages } from "@app/config/images";
import {
  appMessages,
  messageTypeIcons,
  messageTypeClasses
} from "@app/config/messages";
import { MessageService } from "./services/message.service";
import { JwtInterceptService } from "./services/jwt-intercept/jwt-intercept.service";

export const providers: Provider[] = [
  {
    provide: API,
    useValue: {
      url: environment.api.url,
      host: environment.api.host,
      index: API_ROUTES
    }
  },
  {
    provide: APP_NAME,
    useValue: environment.appName
  },
  {
    provide: BASE_HREF,
    useValue: "/"
  },
  {
    provide: APP_ROUTES,
    useValue: AppRoutes
  },
  {
    provide: APP_LOGO,
    useValue: environment.appLogo
  },
  {
    provide: APP_IMAGES,
    useValue: AppImages
  },
  {
    provide: APP_MESSAGES,
    useValue: appMessages
  },
  {
    provide: MESSAGE_TYPE_CLASS,
    useValue: messageTypeClasses
  },
  {
    provide: MESSAGE_TYPE_ICONS,
    useValue: messageTypeIcons
  },
  AuthService,
  AnimationsService,
  LocalStorageService,
  NotificationsService,
  MessageService,
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: JwtInterceptService
  },
  {
    provide: NGXS_PLUGINS,
    useValue: logoutPlugin,
    multi: true
  },
  AuthGuardService
];
