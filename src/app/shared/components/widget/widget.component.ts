import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Inject
} from "@angular/core";
import { Widget, WidgetEnum, FeedType, TextType } from "@app/models/dashboard";
import { APP_ICONS } from "@app/config/di";
import { AppIcons } from "@app/models/icons";

@Component({
  selector: "app-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {
  constructor(@Inject(APP_ICONS) public icons: AppIcons) {}
  @Input() widget: Widget | any;
  readonly widgetEnum = WidgetEnum;
  readonly feedTypes = FeedType;
  readonly textTypes = TextType;

  ngOnInit() {}
}
