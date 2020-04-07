import { Injectable, Provider } from "@angular/core";
import { of, Observable } from "rxjs";
import { mockUser, mockUserToken, mockAuthState } from "./mocks";

@Injectable({
  providedIn: "root",
})
class MockAuthService {
  constructor() {}
  getUser(id: any) {
    return of(mockUser);
  }
  getUsers() {
    return of([mockUser]);
  }
  login(credentials) {
    return of(mockAuthState);
  }

  logout() {
    return of(true);
  }
}
import { Message, MessageType } from "@app/models/message";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import {
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlSegment,
} from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { MatSnackBarConfig } from "@angular/material";
import { AuthService } from "@app/core/services/auth/auth.service";
import { JwtInterceptService } from "@app/core/services/jwt-intercept/jwt-intercept.service";
import { NotificationsService } from "@app/core/services/notifications/notifications.service";
import { MessageService } from "@app/core/services/message.service";
import {
  API,
  APP_NAME,
  BASE_HREF,
  APP_ROUTES,
  APP_LOGO,
  APP_IMAGES,
  APP_ICONS,
  APP_MESSAGES,
  MESSAGE_TYPE_CLASS,
  MESSAGE_TYPE_ICONS,
} from "@app/config/di";
import { environment } from "@env/environment";
import { API_ROUTES } from "@app/config/api-index";
import { AppRoutes } from "@app/config/routes";
import { AppImages } from "@app/config/images";
import { appIcons } from "@app/config/icons";
import {
  appMessages,
  messageTypeClasses,
  messageTypeIcons,
} from "@app/config/messages";
@Injectable({
  providedIn: "root",
})
class MockMessageService {
  getMessage(id: string): Message {
    return { id: "21", text: "Mock message", type: MessageType.Info };
  }
  getMessageText(id: string) {
    return "Mock message";
  }
}

@Injectable({
  providedIn: "root",
})
class MockJwtInterceptService {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = mockUserToken;
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(req);
  }
}

@Injectable({
  providedIn: "root",
})
class MockAuthGuardService implements CanActivate, CanLoad {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  private tokenExpired() {
    return false;
  }
  private canAccess() {
    return true;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canAccess();
  }
  canLoad(route: Route, segments: UrlSegment[]) {
    return this.canAccess();
  }
}

@Injectable({
  providedIn: "root",
})
class MockNotificationsService {
  default(message: string) {}

  info(message: string) {}

  success(message: string) {}

  warn(message: string) {}

  error(message: string) {}
  showLoading(label?: string) {}
  closeLoading() {}
  private show(message: string, configuration: MatSnackBarConfig) {}
}
export const mockCommonProviders: Provider[] = [
  {
    provide: API,
    useValue: {
      url: environment.api.url,
      host: environment.api.host,
      index: API_ROUTES,
    },
  },
  {
    provide: APP_NAME,
    useValue: environment.appName,
  },
  {
    provide: BASE_HREF,
    useValue: "/",
  },
  {
    provide: APP_ROUTES,
    useValue: AppRoutes,
  },
  {
    provide: APP_LOGO,
    useValue: environment.appLogo,
  },
  {
    provide: APP_IMAGES,
    useValue: AppImages,
  },
  {
    provide: APP_ICONS,
    useValue: appIcons,
  },
];
export const mockProviders: Provider[] = [
  mockCommonProviders,
  {
    provide: APP_MESSAGES,
    useValue: appMessages,
  },
  {
    provide: MESSAGE_TYPE_CLASS,
    useValue: messageTypeClasses,
  },
  {
    provide: MESSAGE_TYPE_ICONS,
    useValue: messageTypeIcons,
  },
  { provide: AuthService, useClass: MockAuthService },
  { provide: JwtInterceptService, useClass: MockJwtInterceptService },
  { provide: NotificationsService, useClass: MockNotificationsService },
  { provide: JwtInterceptService, useClass: MockJwtInterceptService },
  { provide: MessageService, useClass: MockMessageService },
];
