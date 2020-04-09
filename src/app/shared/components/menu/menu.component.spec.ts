/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule, MatExpansionModule } from "@angular/material";
import { By } from "@angular/platform-browser";
import { mockStartupModules } from "@test/modules";
import { mockProviders } from "@test/providers";
import { IconComponent } from "../icon/icon.component";
import { IconModule } from "../icon/icon.module";
import { MenuComponent } from "./menu.component";
import { MenuItem } from "@app/models/menu";
import { IconType } from "@app/models/icons";
import { RouterLink } from "@angular/router";
import { ChangeDetectionStrategy } from "@angular/core";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.overrideComponent(MenuComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default },
    });
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
  it("should display some menu when passed on input", () => {
    const mockMenu: Partial<MenuItem> = {
      id: "mock",
      icon: { name: "help", type: IconType.Material },
      label: "Help",
      slugs: ["help"],
    };
    component.menus = [mockMenu];
    fixture.detectChanges();
    const existingLinks = fixture.debugElement.queryAll(
      By.directive(RouterLink)
    );
    expect(existingLinks.length).toEqual(2);
    expect(existingLinks[1].nativeElement.textContent).toContain(
      mockMenu.label
    );
  });
});
