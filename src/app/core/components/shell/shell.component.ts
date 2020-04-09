import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { APP_LOGO, APP_NAME, BASE_HREF } from "@app/config/di";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { MenuItem } from "@app/models/menu";
import { Logout } from "@app/core/store/actions/auth.action";
import { AuthStateModel } from "@app/core/store/models/auth.model";
import { AuthState } from "@app/core/store/auth.state";
@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  constructor(
    @Inject(APP_LOGO) public appLogo: string,
    @Inject(APP_NAME) public appName: string,
    @Inject(BASE_HREF) public baseHref: string,
    public store: Store
  ) {}
  @Select() menus$: Observable<MenuItem[]>;
  @Select(AuthState) auth$: Observable<AuthStateModel>;

  ngOnInit() {}
  logout() {
    this.store.dispatch(new Logout());
  }
}
