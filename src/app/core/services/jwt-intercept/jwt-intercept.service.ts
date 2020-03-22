import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngxs/store";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AUTH_STATE_TOKEN } from "@app/core/store/auth.state";
import { API_ROUTES } from "@app/config/api-index";
import { APP_ROUTES } from "@app/config/di";
import { tap } from "rxjs/operators";
import { RefreshToken } from "@app/core/store/actions/auth.action";
@Injectable({
  providedIn: "root"
})
export class JwtInterceptService {
  constructor(
    private store: Store,
    @Inject(APP_ROUTES) private apiRoutes: typeof API_ROUTES
  ) {}
  readonly blacklistedRoutes = [String(this.apiRoutes.AuthLogin)];
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.blacklistedRoutes.includes(req.url)) {
      const token = this.store.selectSnapshot(AUTH_STATE_TOKEN).token;
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      tap(e => {
        if (e instanceof HttpResponse) {
          if (e.headers.has("token")) {
            this.store.dispatch(new RefreshToken(e.headers.get("token")));
          }
        }
      })
    );
  }
}
