import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from "@angular/core/testing";

import { MatTableAdvancedComponent } from "./mat-table-advanced.component";
import { MatAdvancedTableModule } from "./mat-table-advanced.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { mockData, MockClass } from "./mocks";
import { By } from "@angular/platform-browser";
import { MatPaginator, MatSort, MatSortHeader } from "@angular/material";
import { SimpleChange } from "@angular/core";
import { MatTableAdvancedService } from "./mat-table-advanced.service";
import { NgxMatTableOptionsDefaults } from "./models/ngx-mat-table-options.model";

describe("MatTableAdvancedComponent", () => {
  let component: MatTableAdvancedComponent;
  let fixture: ComponentFixture<MatTableAdvancedComponent>;
  let service: MatTableAdvancedService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatAdvancedTableModule],
    }).compileComponents();
    service = TestBed.get(MatTableAdvancedService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableAdvancedComponent);
    component = fixture.componentInstance;
    component.cdr.detectChanges();
  });
  describe("Basic Implementation", () => {
    const setupColumns = () => {
      component.columns = service.getColumnsOfType(MockClass);
      component.ngOnChanges({
        columns: new SimpleChange(null, component.columns, true),
      });
      component.cdr.detectChanges();
    };
    const toggleLoadingData = (loading) => {
      component.data = loading ? [] : mockData;
      component.loading = loading;
      component.ngOnChanges({
        loading: new SimpleChange(null, component.loading, true),
      });
      component.cdr.detectChanges();
    };
    const setupData = (data = mockData) => {
      component.data = data;
      component.ngOnChanges({
        data: new SimpleChange(null, component.data, true),
      });
      component.cdr.detectChanges();
    };

    // Test cases
    describe("should create the component with defaults", () => {
      beforeEach(() => {
        setupColumns();
      });
      it("Should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("Should contains the table header", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-header")
        ).toBeTruthy("table header not created");
      });
      it("Should contains the search bar", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-search")
        ).toBeTruthy("table search field not created");
      });
      it("Should start with empty data text", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-empty")
            .textContent
        ).toContain(component.options.emptyDataText);
      });
      it("Should not contain a title", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-title")
        ).toBeFalsy();
      });
      it("Should not contain a legned", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-legend")
        ).toBeFalsy();
      });
      it("Should not contain a selection column", () => {
        expect(
          fixture.nativeElement.querySelector(
            `thead .mat-${component.selectionColumnName}-column`
          )
        ).toBeFalsy();
      });
      it("Should not contain an actions column", () => {
        expect(
          fixture.nativeElement.querySelector(`thead th:last-child`).textContent
        ).not.toContain(component.actionsColumn.verboseName);
      });
      it("Should have a placeholder when cell data not defined", () => {
        setupData([mockData[0], { ...mockData[1], bar: null }]);
        expect(
          fixture.nativeElement.querySelector(
            "table tbody tr:last-child td:last-child"
          ).textContent
        ).toContain(component.options.placeholder);
      });
      it("Should have at least  one cell with a min width and max width style definition", () => {
        setupData();
        expect(
          fixture.nativeElement.querySelector("table tbody td").style.cssText
        ).toContain(
          `max-width: ${component.options.maxCellWidth}px; min-width: ${component.options.minCellWidth}px`
        );
      });
      it("Should have a paginator", () => {
        expect(
          fixture.debugElement.query(By.directive(MatPaginator)).nativeElement
        ).toBeTruthy("table pagination not created");
      });
      it("Should have no sorting headers", () => {
        expect(
          fixture.debugElement.queryAll(By.directive(MatSortHeader)).length
        ).toEqual(component.columns.filter((col) => col.canSort).length);
      });
      it("Should toggle the loading text depending on loading input", () => {
        toggleLoadingData(true);
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-loading-data")
            .textContent
        ).toContain(component.options.loadingText);
        toggleLoadingData(false);
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-loading-data")
        ).toBeFalsy();
      });
    });
    //
    it("should contains a table with it's headers", () => {
      setupColumns();
      const table: HTMLTableElement = fixture.nativeElement.querySelector(
        "table"
      );
      expect(table).toBeTruthy();
      const headers: HTMLTableHeaderCellElement[] = Array.from(
        table.querySelectorAll("th")
      );
      expect(headers).toBeTruthy();
      component.columns.forEach((col, i) => {
        expect(headers[i]).toBeTruthy();
        expect(headers[i].textContent).toContain(col.verboseName);
      });
    });
    it("should contains a single line of data", () => {
      setupColumns();
      setupData();
      const tableBody: HTMLTableElement = fixture.nativeElement.querySelector(
        "table tbody"
      );
      expect(tableBody).toBeTruthy();
      const rows: HTMLTableRowElement[] = Array.from(
        tableBody.querySelectorAll("tr")
      );
      expect(rows.length).toEqual(mockData.length);
      mockData.forEach((row, i) => {
        const cells = Array.from(rows[i].querySelectorAll("td"));
        component.columns.forEach((col, j) => {
          expect(cells[j]).toBeTruthy();
          expect(cells[j].textContent.trim()).toContain(mockData[i][col.key]);
        });
      });
    });
    it("should filter data using search input", () => {
      setupColumns();
      setupData();
      component.searchControl.setValue(21);
      component.cdr.detectChanges();
      const rows: HTMLTableRowElement[] = Array.from(
        fixture.nativeElement.querySelectorAll("table tbody tr")
      );
      expect(rows.length).toEqual(1);
    });
    // End of Test cases
  });
});
