import { WidgetEnum } from "@app/models/dashboard";

export const appIcons = {
  widgets: {
    [WidgetEnum.Feed]: "rss_feed",
    [WidgetEnum.Map]: "map",
    [WidgetEnum.Graph]: "pie_chart",
    [WidgetEnum.Menu]: "apps",
    [WidgetEnum.Statistic]: "score"
  }
};
