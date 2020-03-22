import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment
} from "@angular/router";
import { Store } from "@ngxs/store";
import { Logout } from "../store/actions/auth.action";
import { AppStateModel } from "../store/models/app-state.model";
import { APP_STATE_TOKEN } from "../store/app.state";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private store: Store) {}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  private tokenExpired() {
    const snapshot: AppStateModel = this.store.selectSnapshot(APP_STATE_TOKEN);
    const expiryAt: number = snapshot.auth.tokenExpireAt;
    return !expiryAt || (expiryAt && expiryAt > Date.now());
  }
  private canAccess() {
    const isTokenExpired = this.tokenExpired();
    if (isTokenExpired) {
      this.store.dispatch(new Logout());
    }
    return !isTokenExpired;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canAccess();
  }
  canLoad(route: Route, segments: UrlSegment[]) {
    return this.canAccess();
  }
}
