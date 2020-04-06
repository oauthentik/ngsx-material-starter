/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { JwtInterceptService } from "./jwt-intercept.service";

describe("Service: JwtIntercept", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtInterceptService]
    });
  });

  it("should inject the service", inject(
    [JwtInterceptService],
    (service: JwtInterceptService) => {
      expect(service).toBeTruthy();
    }
  ));
});
