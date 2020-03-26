import * as faLibrary from "@fortawesome/free-solid-svg-icons";
import { WidgetEnum } from "@app/models/dashboard";

export const appIcons = {
  widgets: {
    [WidgetEnum.Feed]: "rss_feed",
    [WidgetEnum.Map]: "map",
    [WidgetEnum.Graph]: "pie_chart",
    [WidgetEnum.Menu]: "apps",
    [WidgetEnum.Statistic]: "score"
  },
  getIcon: getIcon
};
export function getIcon(iconId: string) {
  if (iconId.startsWith("fa-")) {
    const slug = iconId.split("-")[1];
    const faId = `${slug[0].toUpperCase()}${slug.slice(1).toLowerCase}`;
    return faLibrary["fa" + faId];
  } else {
    return iconId;
  }
}
