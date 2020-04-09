/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { appIcons } from "@app/config/icons";
import { IconComponent } from "./icon.component";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe("IconComponent", () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent],
      imports: [CommonModule, MatIconModule, FontAwesomeModule],
    }).compileComponents();
    library.add(...appIcons);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
