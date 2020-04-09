import { AuthComponent } from "./core/components/auth/auth.component";
import { ShellComponent } from "./core/components/shell/shell.component";
import { AuthGuardService } from "./core/guards/auth-guard.service";
import { AppDashboardComponent } from "./core/components/app-dashboard/app-dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoreModule } from "@angular/flex-layout";

const routes: Routes = [
  {
    path: "login",
    component: AuthComponent,
  },
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        component: AppDashboardComponent,
      },
    ],
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
