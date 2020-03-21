import { Component, OnInit, Inject } from "@angular/core";
import { APP_LOGO, APP_NAME, BASE_HREF } from "@app/config/di";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { MenuItem } from "@app/models/menu";
import { Logout } from "@app/core/store/actions/auth.action";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"]
})
export class ShellComponent implements OnInit {
  constructor(
    @Inject(APP_LOGO) public appLogo: string,
    @Inject(APP_NAME) public appName: string,
    @Inject(BASE_HREF) public baseHref: string,
    public store: Store
  ) {}
  @Select() menus$: Observable<MenuItem[]>;
  ngOnInit() {}
  logout() {
    this.store.dispatch(new Logout());
  }
}
