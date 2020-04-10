import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageComponent } from "./message.component";
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
} from "@angular/material";
import { MessageService } from "@app/core/services/message.service";

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [MessageComponent],
})
export class MessagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessagesModule,
      providers: [MessageService],
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: MessagesModule,
    };
  }
}
