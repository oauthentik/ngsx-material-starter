import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetComponent } from "./widget.component";
import { MatCardModule, MatIconModule } from "@angular/material";
import { MenuModule } from "../menu/menu.module";
import { SharedPipesModule } from "@app/shared/pipes/pipes.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [WidgetComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MenuModule,
    RouterModule,
    SharedPipesModule
  ],
  exports: [WidgetComponent],
  providers: []
})
export class WidgetModule {}
