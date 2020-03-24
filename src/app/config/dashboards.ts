import { UserRoles } from "@app/models/user";
import { Dashboard, WidgetEnum, Widget } from "@app/models/dashboard";
import { WidgetLayouts } from "./layouts";
import { environment } from "@env/environment";
const aboutWidget: Widget = {
  title: "Welcome to " + environment.appName,
  type: WidgetEnum.Text,
  layout: { ...WidgetLayouts.Fill, order: 0 },
  content: "",
  url: "/about"
};
export const dashboards: Partial<{ [key in UserRoles]: Dashboard }> = {
  [UserRoles.Guest]: {
    widgets: [aboutWidget]
  },
  [UserRoles.Moderator]: {
    widgets: [aboutWidget]
  }
};
