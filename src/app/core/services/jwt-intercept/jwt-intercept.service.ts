import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppStateModel } from "@app/core/store/models/app-state.model";
@Injectable({
  providedIn: "root"
})
export class JwtInterceptService {
  constructor(private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot<string>(
      (state: AppStateModel) => state.auth.token
    );
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(req);
  }
}
