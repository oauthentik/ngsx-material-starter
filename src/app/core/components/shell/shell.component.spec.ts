/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ShellComponent } from "./shell.component";
import { mockCoreModules, mockStartupModules } from "@test/modules";
import { UiModule } from "@app/core/ui.module";
import { mockProviders } from "@test/providers";
import { MenuModule } from "@app/shared/components/menu/menu.module";
import { BreadcrumbModule } from "../breadcrumb/breadcrumb..module";

describe("ShellComponent", () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShellComponent],
      imports: [
        ...mockStartupModules,
        ...mockCoreModules,
        UiModule,
        BreadcrumbModule,
        MenuModule,
      ],
      providers: [...mockProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
