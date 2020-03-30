import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef
} from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Dashboard, Widget, WidgetEnum, TextType } from "@app/models/dashboard";
import { LoadAppDashboard } from "@app/core/store/actions/menu.actions";
import { AUTH_STATE_TOKEN } from "@app/core/store/auth.state";
import { AppState } from "@app/core/store/app.state";
import { UsersState } from "@app/core/store/users.state";
import { User, UserModel } from "@app/models/user";
import { LoadUsers } from "@app/core/store/actions/users.action";
import { WidgetLayouts } from "@app/config/layouts";
import { MatTableAdvancedService } from "mat-table-advanced";
import { ColumnModel } from "projects/mat-table-advanced/src/lib/models/column.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./app-dashboard.component.html",
  styleUrls: ["./app-dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppDashboardComponent implements OnInit {
  constructor(
    public store: Store,
    public el: ElementRef,
    private advancedTableService: MatTableAdvancedService
  ) {}
  @Select(AppState.getDashboard) dashboard$: Observable<Dashboard>;
  @Select(UsersState) users$: Observable<User[]>;
  usersWidget: Partial<Widget> = {
    title: "DataTables",
    type: WidgetEnum.Text,
    layout: WidgetLayouts.Fill,
    content: { type: TextType.HTML, content: null }
  };
  userModelColumns: ColumnModel[];
  ngOnInit() {
    this.userModelColumns = this.advancedTableService.getColumnsOfType(
      UserModel
    );
    const currentUser = this.store.selectSnapshot(AUTH_STATE_TOKEN).user.role;
    this.store.dispatch(new LoadAppDashboard(currentUser));
    this.store.dispatch(new LoadUsers());
  }
}
