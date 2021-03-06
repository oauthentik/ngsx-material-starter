import { UiModule } from "@app/core/ui.module";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { NgPipesModule } from "angular-pipes";
import { MatAdvancedTableModule } from "mat-advanced-table";
import { WidgetModule } from "@app/shared/components/widget/widget.module";
import { NgxsModule } from "@ngxs/store";
import { AppState } from "@app/core/store/app.state";
import { AuthState, AUTH_STATE_TOKEN } from "@app/core/store/auth.state";
import { UsersState } from "@app/core/store/users.state";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
export const mockStartupModules: any[] = [
  CommonModule,
  FlexLayoutModule,
  NoopAnimationsModule,
  RouterTestingModule,
  NgPipesModule,
];
export const mockStoreModules: any[] = [
  NgxsModule.forRoot([AppState, AuthState, UsersState]),
  NgxsStoragePluginModule.forRoot({ key: AUTH_STATE_TOKEN.getName() }),
];
export const mockCoreModules: any[] = [
  ...mockStartupModules,
  UiModule,
  MatAdvancedTableModule,
  FontAwesomeModule,
  WidgetModule,
  ...mockStoreModules,
];
