import { Injectable, Inject } from "@angular/core";
import { APP_MESSAGES } from "@app/config/di";
import { Message } from "@app/models/message";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor(@Inject(APP_MESSAGES) private messages: Message[]) {}
  getMessage(id: string) {
    const message = this.messages.find((m) => m.id === id);
    if (!message) {
      throw new Error("Cannot found message with id " + id);
    }
    return message;
  }
  getMessageText(id: string) {
    const message = this.getMessage(id);
    if (!message) {
      throw new Error("Cannot found message with id " + id);
    }
    return message.text;
  }
}
