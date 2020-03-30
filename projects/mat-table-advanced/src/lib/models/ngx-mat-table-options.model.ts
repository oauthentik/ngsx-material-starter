import { MatPaginatorIntl } from "@angular/material";
export interface NgxMatTableOptions {
  minCellWidth: number;
  maxCellWidth: number;
  classList: string[];
  title: string;
  actions: boolean;
  paging: boolean;
  search: boolean;
  selection: boolean;
  placeholder: string;
  emptyDataText: string;
  loadingText: string;
  pagingOptions: MatPaginatorIntl | any | null;
}
export const NgxMatTableOptionsDefaults: NgxMatTableOptions = {
  minCellWidth: 80,
  maxCellWidth: 200,
  classList: [],
  title: null,
  paging: true,
  search: true,
  selection: false,
  placeholder: "N/A",
  loadingText: "Please wait",
  emptyDataText: "No Data available",
  pagingOptions: null,
  actions: false
};
