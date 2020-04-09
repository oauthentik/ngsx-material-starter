export enum MessageType {
  Error = -1,
  Info,
  Warning,
  Success,
}
export interface Message {
  id: string;
  type: MessageType;
  text: string;
}
