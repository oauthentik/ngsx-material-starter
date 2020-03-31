import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  HostBinding,
  ContentChild,
  ContentChildren,
  QueryList,
  ViewChild,
  ChangeDetectionStrategy,
  AfterContentInit,
  AfterViewInit,
  OnChanges
} from "@angular/core";
import { ColumnModel } from "./models/column.model";
import { SelectionModel } from "@angular/cdk/collections";
import { MatPaginator, MatTableDataSource, Sort } from "@angular/material";
import { MatCellTemplateDirective } from "./directives/mat-cell-template.directive";
import { cloneDeep, orderBy, sortBy } from "lodash";
import {
  NgxMatTableOptions,
  NgxMatTableOptionsDefaults
} from "./models/ngx-mat-table-options.model";
import { FormControl } from "@angular/forms";
@Component({
  selector: "ngx-mat-table-advanced",
  templateUrl: "./mat-table-advanced.component.html",
  styleUrls: ["./mat-table-advanced.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatTableAdvancedComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnChanges {
  @Input() title: string;
  @Input() columns: ColumnModel[] = [];
  @Input() hiddenColumns: string[] = [];
  @Input() data: any[];
  @Input()
  public set options(v: NgxMatTableOptions) {
    this._options = v
      ? {
          ...NgxMatTableOptionsDefaults,
          ...v
        }
      : NgxMatTableOptionsDefaults;
  }

  public get options(): NgxMatTableOptions {
    return this._options || NgxMatTableOptionsDefaults;
  }

  @Input() loading = false;
  @Input() legend: TemplateRef<any>;
  @HostBinding("class.transparent-bg")
  @Input()
  transparentBg: boolean;
  @Input() rowNgClassFun: (item: any) => { string };
  @Input() @ContentChild("noDataTemplate") noDataTemplate;
  @Input() @ContentChild("loadingTemplate") loadingTemplate;
  @Input() selection = new SelectionModel(true, []);
  @ContentChildren(MatCellTemplateDirective, { read: TemplateRef })
  private _templates: QueryList<MatCellTemplateDirective>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  templatesColumns: string[];
  templates: Partial<MatCellTemplateDirective>[];
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[];
  private _originalData: any[] = [];
  private _options: NgxMatTableOptions;
  private readonly actionsColumn = new ColumnModel({
    key: "actions",
    order: 99,
    verboseName: "Actions"
  });
  readonly selectionColumnName = "selection";
  searchControl: FormControl;
  constructor() {
    this.searchControl = new FormControl();
  }
  ngAfterViewInit(): void {
    if (this.options.paging && this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }
  ngAfterContentInit() {
    this.templates = this._templates.toArray().map(tmp => ({
      template: tmp.template,
      name: tmp.name
    }));
  }
  ngOnChanges(changes) {
    if (changes["data"]) {
      const source = changes["data"].currentValue || [];
      this.dataSource = new MatTableDataSource(source);
      if (this.options.paging && !this.dataSource.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (!this._originalData.length) {
        this._originalData = cloneDeep(source);
      }
    }
    this.buildColumns();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngOnInit() {
    console.log(this.dataSource);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (object, filter) => {
      return this.columns
        .map(column => {
          const columnType = column.propertyType;
          const columnValue = column.propertyAccessor
            ? column.propertyAccessor(object[column.key], object)
            : object[column.key];

          switch (columnType) {
            case "Date":
              // TODO: use ana adapter if so provided
              return String(columnValue).includes(filter);
            case "String":
              return String(columnValue)
                .toLowerCase()
                .includes(filter.toLowerCase().trim());
            case "Number":
            case "Object":
              return columnValue === filter;
          }
        })
        .find(ok => ok);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sortData(sort: Sort) {
    const isAsc = sort.direction === "asc";
    const column = this.columns.find(c => c.key === sort.active);
    const direction = isAsc ? "asc" : "desc";
    if (!sort.active || sort.direction === "") {
      this.dataSource.data = this._originalData.slice();
      return;
    }
    if (column.propertyAccessor) {
      this.dataSource.data = orderBy(
        this._originalData,
        [
          column.sortByAccessor
            ? column.sortByAccessor
            : instance =>
                column.propertyAccessor(instance[column.key], instance)
        ],
        [direction]
      );
    } else {
      this.dataSource.data = orderBy(
        this._originalData,
        [sort.active],
        [direction]
      );
    }
  }
  notInHidden = item => !this.hiddenColumns.includes(item.key);

  private buildColumns() {
    this.sortColumns();
    if (this.options.actions) {
      if (!this.columns.find(col => col.key.includes(this.actionsColumn.key))) {
        this.columns = [...this.columns, this.actionsColumn];
      }
    }
    this.displayedColumns = this.columns
      .filter(col => col.visible && !this.hiddenColumns.includes(col.key))
      .map(col => col.key);
    if (
      this.options.selection &&
      !this.displayedColumns.includes(this.selectionColumnName)
    ) {
      this.displayedColumns = [
        this.selectionColumnName,
        ...this.displayedColumns
      ];
    }
    if (
      this.dataSource.sort &&
      this.dataSource.data.length &&
      this.columns.length > 0
    ) {
      const sortByColumn =
        this.columns.find(col => !!col.sortBy) || this.columns[0];
      this.dataSource.sort.sort({
        id: sortByColumn.key,
        start: sortByColumn.sortBy,
        disableClear: false
      });
    }
  }

  private sortColumns() {
    this.columns = sortBy(this.columns, ["order"]);
  }
}
