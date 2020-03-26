import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Inject
} from "@angular/core";
import { Widget, WidgetEnum, FeedType, TextType } from "@app/models/dashboard";

@Component({
  selector: "app-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {
  constructor() {}
  @Input() widget: Widget | any;
  readonly widgetEnum = WidgetEnum;
  readonly feedTypes = FeedType;
  readonly textTypes = TextType;

  ngOnInit() {}
}
