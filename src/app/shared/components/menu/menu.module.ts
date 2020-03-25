import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatExpansionModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [MenuComponent]
})
export class MenuModule {}
