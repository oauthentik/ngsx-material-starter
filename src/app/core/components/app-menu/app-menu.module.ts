import { AppMenuService } from "./app-menu.service";
import { AppMenuComponent } from "./app-menu.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatExpansionModule
} from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AppMenuComponent],
  providers: [AppMenuService]
})
export class AppMenuModule {}
