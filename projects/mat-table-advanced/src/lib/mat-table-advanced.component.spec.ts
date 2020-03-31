import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MatTableAdvancedComponent } from "./mat-table-advanced.component";
import { MatAdvancedTableModule } from "./mat-table-advanced.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { mockData, MockClass } from "./mocks";
import { By } from "@angular/platform-browser";
import { MatPaginator } from "@angular/material";
import { SimpleChange } from "@angular/core";
import { MatTableAdvancedService } from "./mat-table-advanced.service";

describe("MatTableAdvancedComponent", () => {
  let component: MatTableAdvancedComponent;
  let fixture: ComponentFixture<MatTableAdvancedComponent>;
  let service: MatTableAdvancedService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatAdvancedTableModule]
    }).compileComponents();
    service = TestBed.get(MatTableAdvancedService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableAdvancedComponent);
    component = fixture.componentInstance;
    component.cdr.detectChanges();
  });
  describe("Basic Implementation", () => {
    const prepareColumns = () => {
      component.columns = service.getColumnsOfType(MockClass);
      component.ngOnChanges({
        columns: new SimpleChange(null, component.columns, true)
      });
      component.cdr.detectChanges();
    };
    const prepareData = () => {
      component.data = mockData;
      component.ngOnChanges({
        data: new SimpleChange(null, component.data, true)
      });
      component.cdr.detectChanges();
    };
    // Test cases
    it("should create the component with defaults", () => {
      expect(component).toBeTruthy();
      expect(
        fixture.nativeElement.querySelector(".ngx-mat-table-header")
      ).toBeTruthy("table header not created");
      expect(
        fixture.nativeElement.querySelector(".ngx-mat-table-search")
      ).toBeTruthy("table search field not created");
      expect(
        fixture.debugElement.query(By.directive(MatPaginator)).nativeElement
      ).toBeTruthy("table pagination not created");
    });
    it("should contains a table with it's headers", () => {
      prepareColumns();
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
      prepareColumns();
      prepareData();
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
      prepareColumns();
      prepareData();
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
