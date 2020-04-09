import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SafePipe } from "./safe.pipe";

@NgModule({
  declarations: [SafePipe],
  imports: [CommonModule],
  exports: [SafePipe],
  providers: [],
})
export class SharedPipesModule {}
