/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { MessageComponent } from "./message.component";
import { mockStartupModules } from "@test/modules";
import {
  MatCardModule,
  MatIconModule,
  MatButtonModule,
} from "@angular/material";
import { mockProviders } from "@test/providers";

describe("MessageComponent", () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent],
      imports: [
        ...mockStartupModules,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
      ],
      providers: [...mockProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
