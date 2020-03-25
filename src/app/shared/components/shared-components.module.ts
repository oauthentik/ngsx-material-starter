import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingIndicatorComponent } from "./loading-indicator/loading-indicator.component";
import { MatProgressSpinnerModule } from "@angular/material";
import { SharedPipesModule } from "../pipes/pipes.module";
import { MenuModule } from "./menu/menu.module";

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MenuModule,
    SharedPipesModule
  ],
  exports: [LoadingIndicatorComponent, MenuModule, SharedPipesModule],
  providers: []
})
export class SharedComponentsModule {}
