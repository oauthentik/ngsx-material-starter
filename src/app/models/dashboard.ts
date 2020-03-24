export interface Statistics {
  name: string;
  value: string;
  icon: string;
}
export interface Feed {
  date: Date;
  content: string;
}
export interface MapPoint {
  lat: number;
  long: number;
  label: string;
}
export interface Map {
  points: MapPoint[];
  graphic: string;
}
export enum WidgetSize {
  Fill = "Fill",
  Third = "Third",
  Quarter = "Quarter"
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
  content: Statistics | Feed[] | Map | string;
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
  widgets: Widget[];
}
