/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { WidgetComponent } from "./widget.component";
import { mockStartupModules } from "@test/modules";
import { IconModule } from "../icon/icon.module";
import { SafePipe } from "@app/shared/pipes/safe.pipe";
import { MenuModule } from "../menu/menu.module";

describe("WidgetComponent", () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetComponent, SafePipe],
      imports: [...mockStartupModules, IconModule, MenuModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
