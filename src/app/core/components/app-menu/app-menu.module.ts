import { AppMenuService } from "./app-menu.service";
import { AppMenuComponent } from "./app-menu.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuModule } from "@app/shared/components/menu/menu.module";

@NgModule({
  declarations: [AppMenuComponent],
  imports: [CommonModule, MenuModule],
  exports: [AppMenuComponent],
  providers: [AppMenuService],
})
export class AppMenuModule {}
