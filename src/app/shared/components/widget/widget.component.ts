import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Inject,
  HostBinding
} from "@angular/core";
import {
  Widget,
  WidgetEnum,
  FeedType,
  TextType,
  WidgetLayout
} from "@app/models/dashboard";

@Component({
  selector: "app-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {
  constructor() {}
  @Input() widget: Widget | any;

  @HostBinding("style.height.%")
  public get maxheight(): number {
    return this.widget.layout.yAxisRatio * 100;
  }

  readonly widgetEnum = WidgetEnum;
  readonly feedTypes = FeedType;
  readonly textTypes = TextType;
  readonly widgetMarginDefaultPx = 10;
  ngOnInit() {}
}
