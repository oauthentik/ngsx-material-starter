import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CdkScrollable } from "@angular/cdk/overlay";

@NgModule({
  declarations: [CdkScrollable],
  imports: [CommonModule],
  exports: [CdkScrollable],
  providers: [],
})
export class CdkSharedModule {}
