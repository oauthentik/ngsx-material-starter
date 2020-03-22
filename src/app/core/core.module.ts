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
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { AuthState } from "./store/auth.state";

@NgModule({
  declarations: [ShellComponent, AuthComponent, AppDashboardComponent],
  imports: [
    CommonModule,
    NgxsModule.forRoot([AppState, AuthState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    HttpClientModule,
    UiModule,
    NgPipesModule,
    AppMenuModule,
    BreadcrumbModule,
    RouterModule
  ],
  exports: [ShellComponent, AuthComponent, AppDashboardComponent],
  providers: providers
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("Core module already injected");
    }
  }
}
