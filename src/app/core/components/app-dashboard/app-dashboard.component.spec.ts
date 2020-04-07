/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Login } from "@app/core/store/actions/auth.action";
import { Store } from "@ngxs/store";
import { mockCredentials } from "@test/mocks";
import { mockCoreModules } from "@test/modules";
import { mockProviders } from "@test/providers";
import { AppDashboardComponent } from "./app-dashboard.component";
import { By } from "@angular/platform-browser";
import { WidgetComponent } from "@app/shared/components/widget/widget.component";

describe("AppDashboardComponent", () => {
  let component: AppDashboardComponent;
  let fixture: ComponentFixture<AppDashboardComponent>;
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppDashboardComponent],
      imports: [...mockCoreModules],
      providers: mockProviders,
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    store.dispatch(new Login(mockCredentials));
    fixture = TestBed.createComponent(AppDashboardComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render a widget with class 'app-widget-list' ", () => {
    expect(
      fixture.nativeElement.querySelector(".app-widget-list")
    ).toBeTruthy();
  });
  it("'app-widget-list' Should be of a fixed height ", () => {
    expect(
      fixture.nativeElement.querySelector(".app-widget-list").offsetHeight
    ).toEqual(component.el.nativeElement.offsetHeight);
  });

  it("should contains at least one widget", () => {
    expect(
      fixture.debugElement.queryAll(By.directive(WidgetComponent)).length
    ).toBeGreaterThanOrEqual(1);
  });
  it("should contains usersWidget", () => {
    expect(
      fixture.debugElement
        .queryAll(By.directive(WidgetComponent))
        .find(
          (widget) =>
            (widget.componentInstance as WidgetComponent).widget ===
            component.usersWidget
        )
    ).toBeTruthy();
  });
});
