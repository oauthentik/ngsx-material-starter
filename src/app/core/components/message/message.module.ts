import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageComponent } from "./message.component";
import { MessageService } from "@app/core/services/message.service";
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
} from "@angular/material";

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [MessageComponent],
  providers: [
    {
      provide: MessageService,
      useExisting: MessageService,
    },
  ],
})
export class MessagesModule {}
