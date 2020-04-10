import { BreadcrumbService } from "./breadcrumb.service";
import { BreadcrumbComponent } from "./breadcrumb.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [BreadcrumbComponent],
  providers: [BreadcrumbService],
})
export class BreadcrumbModule {}
