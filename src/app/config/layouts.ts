import { WidgetLayout, WidgetSize } from "@app/models/dashboard";

export const WidgetLayouts: Partial<
  { [key in WidgetSize]: Partial<WidgetLayout> }
> = {
  Fill: {
    placement: "top",
    xAxisRatio: 1,
    yAxisRatio: 0.5
  },
  Third: {
    placement: "top",
    xAxisRatio: 0.3,
    yAxisRatio: 0.6
  },
  Quarter: {
    placement: "top",
    xAxisRatio: 0.4,
    yAxisRatio: 0.6
  }
};
