/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { JwtInterceptService } from "./jwt-intercept.service";
import { mockProviders } from "@test/providers";
import { mockStoreModules } from "@test/modules";
import { HttpClientModule } from "@angular/common/http";

describe("Service: JwtIntercept", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtInterceptService, ...mockProviders],
      imports: [...mockStoreModules, HttpClientModule],
    });
  });

  it("should inject the service", inject(
    [JwtInterceptService],
    (service: JwtInterceptService) => {
      expect(service).toBeTruthy();
    }
  ));
});
