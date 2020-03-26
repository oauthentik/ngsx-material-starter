import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Input
} from "@angular/core";
import { BASE_HREF } from "@app/config/di";
import { MenuItem } from "@app/models/menu";
import { Icon, IconType } from "@app/models/icons";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  constructor(@Inject(BASE_HREF) public basePath: string) {}
  arrowIcon: Icon = { name: "keyboard_arrow_right", type: IconType.Material };
  dashboardIcon: Icon = { name: "dashboard", type: IconType.Material };
  @Input() menus: MenuItem[];
  ngOnInit() {}
}
