import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { Icon, IconSize, IconType } from "@app/models/icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as faLibrary from "@fortawesome/free-solid-svg-icons";
import * as fabLibrary from "@fortawesome/free-brands-svg-icons";
import { appIcons } from "@app/config/icons";
@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  constructor() {}
  iconSize = IconSize;
  iconType = IconType;
  @Input() icon: Icon;
  loadIfNotAvailable(icon: Icon) {
    if (icon.type === IconType.FontAwesome) {
      const iconId = icon.name.includes("-")
        ? icon.name.split("-")[1]
        : icon.name;
      const faId = `${iconId[0].toUpperCase()}${iconId.slice(1).toLowerCase()}`;
      const faPrefix = "fa";
      const resolvedIcon =
        faLibrary[faPrefix + faId] || fabLibrary[faPrefix + faId];
      if (resolvedIcon && !appIcons.includes(resolvedIcon)) {
        library.add(resolvedIcon);
      }
    }
  }
  ngOnInit() {
    if (this.icon) {
      this.loadIfNotAvailable(this.icon);
    }
  }
}
