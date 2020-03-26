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
import { IconType } from "@app/models/icons";
const aboutWidget: Partial<Widget> = {
  title: "Welcome to " + environment.appName,
  type: WidgetEnum.Text,
  layout: { ...WidgetLayouts.Third, order: 0 },
  content: { type: TextType.Brut, content: `` },
  icon: { name: "info", type: IconType.Material },
  url: "/about"
};
const embedWidget: Partial<Widget> = {
  title: "More about Ngxs",
  type: WidgetEnum.Feed,
  layout: { ...WidgetLayouts.Third, order: 0 },
  icon: { name: "info", type: IconType.Material },
  content: {
    type: FeedType.Embed,
    content: "https://www.youtube.com/embed/SGj11j4hxmg"
  },
  url: "https://www.youtube.com/watch?v=SGj11j4hxmg"
};
const linksWidget: Partial<Widget> = {
  title: "Links",
  type: WidgetEnum.Menu,
  icon: { name: "link", type: IconType.Material },
  layout: { ...WidgetLayouts.Third, order: 0 },
  content: [
    {
      label: "Github",
      icon: { type: IconType.FontAwesome, name: "fab-github" },
      slugs: ["https://github.com/oauthentik/ngsx-material-starter"],
      redirect: true
    },
    {
      label: "Linkedin",
      icon: { type: IconType.FontAwesome, name: "fab-linkedin" },
      slugs: ["https://www.linkedin.com/in/othmane-elalaoui-banouzi/"],
      redirect: true
    },
    {
      label: "Instagram",
      icon: { type: IconType.FontAwesome, name: "fab-instagram" },
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
    widgets: [aboutWidget, linksWidget, embedWidget]
  }
};
