import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingIndicatorComponent } from "./loading-indicator/loading-indicator.component";
import { MatProgressSpinnerModule } from "@angular/material";

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingIndicatorComponent],
  providers: []
})
export class SharedComponentsModule {}
