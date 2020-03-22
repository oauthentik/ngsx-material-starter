import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Input,
  HostBinding,
  NgZone
} from "@angular/core";
import { MessageService } from "@app/core/services/message.service";
import { MESSAGE_TYPE_CLASS, MESSAGE_TYPE_ICONS } from "@app/config/di";
import { MessageType } from "@app/models/message";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    @Inject(MESSAGE_TYPE_CLASS) public messageTypeClass: any,
    @Inject(MESSAGE_TYPE_ICONS) public messageTypeIcons: any,
    private _zone: NgZone
  ) {}

  @HostBinding("class")
  public get classList(): string {
    return this.messageTypeClass[this.messageType];
  }
  @Input()
  text: string;

  @Input()
  public set message(v: string) {
    this.undissmiss();
    if (v && v !== this._message) {
      this._message = v;
      this.messageType = this.messageService.getMessage(v).type;
    }
  }

  public get message(): string {
    if (this._message) {
      return this.messageService.getMessageText(this._message);
    }
    return null;
  }
  @Input()
  messageType: MessageType;
  @Input()
  dismissable: boolean;
  @HostBinding("class.hidden")
  hidden: boolean;
  private _message: string;
  dissmiss() {
    this._zone.run(() => {
      this.hidden = true;
    });
  }
  undissmiss() {
    this._zone.run(() => {
      this.hidden = false;
    });
  }
  ngOnInit() {}
}
