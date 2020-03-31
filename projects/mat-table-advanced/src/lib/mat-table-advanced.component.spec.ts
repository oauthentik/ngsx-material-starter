import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MatTableAdvancedComponent } from "./mat-table-advanced.component";
import { MatAdvancedTableModule } from "./mat-table-advanced.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { mockColumnOptions, mockData } from "./mocks";
import { By } from "@angular/platform-browser";
import { MatPaginator } from "@angular/material";
import { SimpleChange } from "@angular/core";

describe("MatTableAdvancedComponent", () => {
  let component: MatTableAdvancedComponent;
  let fixture: ComponentFixture<MatTableAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatAdvancedTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableAdvancedComponent);
    component = fixture.componentInstance;
    component.cdr.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });

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
    component.columns = [mockColumnOptions];
    component.data = mockData;
    component.ngOnChanges({
      columns: new SimpleChange(null, component.columns, true),
      data: new SimpleChange(null, component.data, true)
    });
    component.cdr.detectChanges();
    const table: HTMLTableElement = fixture.nativeElement.querySelector(
      "table"
    );
    expect(table).toBeTruthy();
    const headers: HTMLTableHeaderCellElement[] = Array.from(
      table.querySelectorAll("th")
    );
    expect(headers).toBeTruthy("Not a header found");
    expect(headers[0]).toBeTruthy("Header index 0 not found");
    expect(headers[0].textContent).toContain(mockColumnOptions.verboseName);
  });
});
