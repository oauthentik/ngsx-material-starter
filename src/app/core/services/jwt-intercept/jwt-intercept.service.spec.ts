/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { JwtInterceptService } from "..";

describe("Service: JwtIntercept", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtInterceptService]
    });
  });

  it("should ...", inject(
    [JwtInterceptService],
    (service: JwtInterceptService) => {
      expect(service).toBeTruthy();
    }
  ));
});
