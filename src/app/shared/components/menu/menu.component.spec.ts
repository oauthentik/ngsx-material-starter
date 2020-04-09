/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MenuComponent } from "./menu.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgPipesModule } from "angular-pipes";
import { MatExpansionModule, MatButtonModule } from "@angular/material";
import { IconModule } from "../icon/icon.module";
import { Icon } from "@app/models/icons";
import { IconComponent } from "../icon/icon.component";
import { mockProviders } from "@test/providers";
import { mockStartupModules } from "@test/modules";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...mockStartupModules,
        MatExpansionModule,
        IconModule,
        MatButtonModule,
      ],
      declarations: [MenuComponent],
      providers: [...mockProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should always render a 'menu-list' ", () => {
    expect(fixture.nativeElement.querySelector(".menu-list")).toBeTruthy();
  });
  it("should always render a dashboard menu entry", () => {
    const firstItem: HTMLElement = fixture.nativeElement.querySelector(
      ".menu-entry:first-child"
    );
    const firstitemIcon = fixture.debugElement.query(
      By.directive(IconComponent)
    );
    expect(firstItem).toBeTruthy();
    expect(firstItem.textContent).toContain("Dashboard");
    expect(firstitemIcon).toBeTruthy();
  });
});
