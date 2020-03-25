import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Input
} from "@angular/core";
import { BASE_HREF } from "@app/config/di";
import { MenuItem } from "@app/models/menu";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  constructor(@Inject(BASE_HREF) public basePath: string) {}
  @Input() menus: MenuItem[];
  ngOnInit() {}
}
