import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { NgPipesModule } from "angular-pipes";
import { IconModule } from "../icon/icon.module";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";

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
