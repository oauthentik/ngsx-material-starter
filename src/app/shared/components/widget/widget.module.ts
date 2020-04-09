import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetComponent } from "./widget.component";
import { MenuModule } from "../menu/menu.module";
import { SharedPipesModule } from "@app/shared/pipes/pipes.module";
import { RouterModule } from "@angular/router";
import { IconModule } from "../icon/icon.module";

@NgModule({
  declarations: [WidgetComponent],
  imports: [
    CommonModule,
    IconModule,
    MenuModule,
    RouterModule,
    SharedPipesModule,
  ],
  exports: [WidgetComponent],
  providers: [],
})
export class WidgetModule {}
