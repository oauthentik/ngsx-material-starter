import { Menu } from "@app/types/menu";

export interface Statistics {
  name: string;
  value: string;
  icon: string;
}
export enum FeedType {
  Gallery,
  Embed,
  Audio,
  Video
}
export interface Feed {
  type: FeedType;
  content: string | string[];
  options?: any;
}
export interface MapPoint {
  lat: number;
  long: number;
  label: string;
}
export interface SvgMap {
  points: MapPoint[];
  graphic: string;
}
export enum WidgetSize {
  Fill = "Fill",
  Third = "Third",
  Quarter = "Quarter"
}
export enum TextType {
  HTML,
  Markdown,
  Brut
}
export interface Text {
  type: TextType;
  content: string;
}
export enum WidgetEnum {
  Text,
  Statistic,
  Feed,
  Menu,
  Map,
  Graph
}
export interface Widget {
  title: string;
  type: WidgetEnum;
  content: Statistics | Feed | SvgMap | Menu[] | Text;
  layout: Partial<WidgetLayout>;
  url: string;
}
export interface WidgetLayout {
  placement: "top" | "middle" | "bottom";
  order: number;
  xAxisRatio: number;
  yAxisRatio: number;
}
export interface Dashboard {
  widgets: Partial<Widget>[];
}
