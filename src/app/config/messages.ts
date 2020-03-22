import { Message, MessageType } from "@app/models/message";

export let appMessages: Message[] = [
  {
    type: MessageType.Error,
    id: "auth.invalid-credentials",
    text: "Invalid User/Password"
  },
  {
    type: MessageType.Error,
    id: "auth.server-error",
    text: "Cannot Authenticate: Server Error"
  },
  {
    type: MessageType.Error,
    id: "forms.all-required",
    text: "All Fields are required"
  },
  {
    type: MessageType.Error,
    id: "forms.required",
    text: "this field is required"
  }
];
