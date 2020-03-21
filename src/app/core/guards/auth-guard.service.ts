import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment
} from "@angular/router";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { Store } from "@ngxs/store";
import { Logout } from "../store/actions/auth.action";
import { AppStateModel } from "../store/models/app-state.model";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private store: Store) {}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  private tokenExpired() {
    const expiryAt: number = this.store.selectSnapshot<number | null>(
      (state: AppStateModel) => (state.auth ? state.auth.tokenExpireAt : null)
    );
    return expiryAt > Date.now();
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
