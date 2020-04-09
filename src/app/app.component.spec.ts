import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { By } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should contains a router-outlet`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.query(By.directive(RouterOutlet))).toBeTruthy();
  });
});
