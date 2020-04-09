import { DebugElement } from "@angular/core";

export const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 },
};
export function click(
  el: DebugElement | HTMLElement,
  eventObj: any = new MouseEvent("click", {})
): void {
  const htmlEl = el instanceof HTMLElement ? el : el.nativeElement;
  htmlEl.click();
  htmlEl.dispatchEvent(eventObj);
}
