import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatIconModule } from "@angular/material";
import { IconComponent } from "./icon.component";

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, MatIconModule, FontAwesomeModule],
  exports: [IconComponent]
})
export class IconModule {}
