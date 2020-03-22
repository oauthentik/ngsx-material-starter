import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { APP_STATE_TOKEN } from "@app/core/store/app.state";
@Injectable({
  providedIn: "root"
})
export class JwtInterceptService {
  constructor(private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot(APP_STATE_TOKEN).auth.token;
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(req);
  }
}
