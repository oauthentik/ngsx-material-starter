import { AppMenuModule } from "./components/app-menu/app-menu.module";
import { AuthComponent } from "./components/auth/auth.component";
import { BreadcrumbModule } from "./components/breadcrumb/breadcrumb..module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { ShellComponent } from "./components/shell/shell.component";
import { providers } from "./providers";
import { UiModule } from "./ui.module";
import { NgPipesModule } from "angular-pipes";
import { AppDashboardComponent } from "./components/app-dashboard/app-dashboard.component";
import { RouterModule } from "@angular/router";
import { AppState } from "./store/app.state";
import { environment } from "@env/environment";
import { AuthState, AUTH_STATE_TOKEN } from "./store/auth.state";
import { MessagesModule } from "./components/message/message.module";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { WidgetModule } from "@app/shared/components/widget/widget.module";
import { MenuModule } from "@app/shared/components/menu/menu.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { appIcons } from "@app/config/icons";
import { MatAdvancedTableModule } from "mat-table-advanced";
import { UsersState } from "./store/users.state";

@NgModule({
  declarations: [ShellComponent, AuthComponent, AppDashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxsModule.forRoot([AppState, AuthState, UsersState], {
      developmentMode: !environment.production,
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({ key: AUTH_STATE_TOKEN.getName() }),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    HttpClientModule,
    UiModule,
    WidgetModule,
    MatAdvancedTableModule.forRoot(),
    NgPipesModule,
    MenuModule,
    AppMenuModule,
    MessagesModule,
    BreadcrumbModule,
    FontAwesomeModule,
  ],
  exports: [ShellComponent, AuthComponent, AppDashboardComponent],
  providers: providers,
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("Core module already injected");
    }
    library.add(...appIcons);
  }
}
