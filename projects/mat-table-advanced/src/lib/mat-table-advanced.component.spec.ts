import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MatTableAdvancedComponent } from "./mat-table-advanced.component";
import { MatAdvancedTableModule } from "./mat-table-advanced.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { mockColumnOptions } from "./mocks";

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
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should create", () => {
    component.columns = [mockColumnOptions];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector(".mat-table")).toBeTruthy();
    const headers: HTMLElement[] = fixture.nativeElement.querySelector(
      ".mat-header-cell"
    );
    expect(headers).toBeTruthy();
    expect(headers[0].textContent).toContain(mockColumnOptions.verboseName);
  });
});
