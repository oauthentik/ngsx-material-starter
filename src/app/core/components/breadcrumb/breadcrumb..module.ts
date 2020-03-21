import { BreadcrumbService } from "./breadcrumb.service";
import { BreadcrumbComponent } from "./breadcrumb.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule
} from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [BreadcrumbComponent],
  providers: [BreadcrumbService]
})
export class BreadcrumbModule {}
