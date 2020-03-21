import { NotificationsService } from "./services/notifications/notifications.service";
import { LocalStorageService } from "./services/local-storage/local-storage.service";
import { AnimationsService } from "./services/animations/animations.service";
import { AuthService } from "./services/auth/auth.service";
import { APP_NAME, APP_LOGO, APP_IMAGES, BASE_HREF } from "./../config/di";
import { environment } from "@env/environment";
import { Provider } from "@angular/core";
import { API } from "../config/di";
import { API_ROUTES } from "../config/api-index";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { logoutPlugin } from "./store/plugins/clean-on-logout";
import { NGXS_PLUGINS } from "@ngxs/store";
import { JwtInterceptService } from "./services";

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
    provide: APP_LOGO,
    useValue: `assets/logo.svg`
  },
  {
    provide: APP_IMAGES,
    useValue: `assets/imgs.svg`
  },
  AuthService,
  AnimationsService,
  LocalStorageService,
  NotificationsService,
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: JwtInterceptService
  },
  {
    provide: NGXS_PLUGINS,
    useValue: logoutPlugin,
    multi: true
  }
];
