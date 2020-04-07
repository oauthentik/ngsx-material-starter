/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { AppMenuComponent } from "./app-menu.component";
import { MenuModule } from "@app/shared/components/menu/menu.module";
import { mockCommonProviders } from "@test/providers";
import { RouterTestingModule } from "@angular/router/testing";
import { MenuComponent } from "@app/shared/components/menu/menu.component";

describe("AppMenuComponent", () => {
  let component: AppMenuComponent;
  let fixture: ComponentFixture<AppMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppMenuComponent],
      imports: [RouterTestingModule, MenuModule],
      providers: mockCommonProviders,
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should contains the menu component", () => {
    expect(
      fixture.debugElement.query(By.directive(MenuComponent))
    ).toBeTruthy();
  });
});
