import { UserRoles } from "@app/models/user";
import {
  Dashboard,
  WidgetEnum,
  Widget,
  TextType,
  FeedType
} from "@app/models/dashboard";
import { WidgetLayouts } from "./layouts";
import { environment } from "@env/environment";
const aboutWidget: Widget = {
  title: "Welcome to " + environment.appName,
  type: WidgetEnum.Text,
  layout: { ...WidgetLayouts.Third, order: 0 },
  content: { type: TextType.Brut, content: `` },
  url: "/about"
};
const embedWidget: Widget = {
  title: "More about Ngxs",
  type: WidgetEnum.Feed,
  layout: { ...WidgetLayouts.Third, order: 0 },
  content: {
    type: FeedType.Embed,
    content: "https://www.youtube.com/watch?v=SGj11j4hxmg"
  },
  url: "/about"
};
const linksWidget: Partial<Widget> = {
  title: "Links",
  type: WidgetEnum.Menu,
  layout: { ...WidgetLayouts.Third, order: 0 },
  content: [
    {
      label: "Github",
      icon: "fa-github",
      slugs: ["https://github.com/oauthentik/ngsx-material-starter"],
      redirect: true
    },
    {
      label: "Linkedin",
      icon: "fa-linkedin",
      slugs: ["https://www.linkedin.com/in/othmane-elalaoui-banouzi/"],
      redirect: true
    },
    {
      label: "Instagram",
      icon: "fa-instagram",
      slugs: ["https://www.instagram.com/banouzi/"],
      redirect: true
    }
  ]
};
export const dashboards: Partial<{ [key in UserRoles]: Dashboard }> = {
  [UserRoles.Guest]: {
    widgets: [aboutWidget]
  },
  [UserRoles.Moderator]: {
    widgets: [aboutWidget, linksWidget]
  }
};
