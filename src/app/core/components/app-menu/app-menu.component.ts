import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit
} from "@angular/core";
import { BASE_HREF } from "@app/config/di";
import { MenuItem } from "@app/models/menu";

@Component({
  selector: "app-menu",
  templateUrl: "./app-menu.component.html",
  styleUrls: ["./app-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMenuComponent implements OnInit {
  constructor(@Inject(BASE_HREF) public basePath: string) {}
  @Input() menus: MenuItem[];

  ngOnInit() {}
}
