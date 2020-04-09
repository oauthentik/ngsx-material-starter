import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  async,
  tick,
} from "@angular/core/testing";
import { UiModule } from "@app/core/ui.module";
import { mockStartupModules, mockStoreModules } from "@test/modules";
import { mockProviders } from "@test/providers";
import { MessagesModule } from "../message/message.module";
import { AuthComponent } from "./auth.component";
import { Store } from "@ngxs/store";
import { Logout } from "@app/core/store/actions/auth.action";
import { By } from "@angular/platform-browser";
import { ChangeDetectionStrategy, DebugElement } from "@angular/core";
import { click } from "@test/utils";

describe("AuthComponent", () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let store: Store;
  let submitBtn: DebugElement;
  beforeEach(async(() => {
    TestBed.overrideComponent(AuthComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default },
    });
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [
        ...mockStartupModules,
        ...mockStoreModules,
        MessagesModule,
        UiModule,
      ],
      providers: [...mockProviders],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.dispatch(new Logout());
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should contains the Login title", () => {
    expect(
      fixture.nativeElement.querySelector(".mat-title").textContent
    ).toContain("Login");
  });
  it("should contains the Form with it's FormControls", () => {
    expect(fixture.nativeElement.querySelector("form")).toBeTruthy();
    expect(
      fixture.debugElement.queryAll(By.css("input[formControlName]")).length
    ).toEqual(2);
    expect(
      fixture.debugElement.query(By.css("input[formControlName='username']"))
    ).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css("input[formControlName='password']"))
    ).toBeTruthy();
  });
  it("should call login method on Login button click", fakeAsync(() => {
    submitBtn = fixture.debugElement.query(By.css(`button[type="submit"]`));
    spyOn(component, "login").and.callThrough();
    click(submitBtn);
    tick();
    fixture.detectChanges();
    expect(component.login).toHaveBeenCalled();
  }));
  it("should fail to submit invalid form", fakeAsync(() => {
    click(submitBtn);
    tick();
    fixture.detectChanges();
    expect(component.form.invalid).toBeTruthy();
    expect(component.form.errors).toContain({
      username: { required: true },
      password: { required: true },
    });
  }));
});
