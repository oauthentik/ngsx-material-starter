import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { NgPipesModule } from "angular-pipes";
import { IconModule } from "../icon/icon.module";

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgPipesModule,
    MatExpansionModule,
    IconModule,
    MatButtonModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule {}
