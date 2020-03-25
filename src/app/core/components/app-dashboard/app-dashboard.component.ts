import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Dashboard } from "@app/models/dashboard";
import { LoadAppDashboard } from "@app/core/store/actions/menu.actions";
import { AUTH_STATE_TOKEN } from "@app/core/store/auth.state";
import { AppIcons } from "@app/models/icons";
import { APP_ICONS } from "@app/config/di";
import { AppState } from "@app/core/store/app.state";

@Component({
  selector: "app-dashboard",
  templateUrl: "./app-dashboard.component.html",
  styleUrls: ["./app-dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppDashboardComponent implements OnInit {
  constructor(public store: Store, @Inject(APP_ICONS) public icons: AppIcons) {}
  @Select(AppState.getDashboard) dashboard$: Observable<Dashboard>;

  ngOnInit() {
    const currentUser = this.store.selectSnapshot(AUTH_STATE_TOKEN).user.role;
    this.store.dispatch(new LoadAppDashboard(currentUser));
  }
}
