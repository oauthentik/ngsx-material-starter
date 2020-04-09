/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { AuthGuardService } from "./auth-guard.service";
import { mockStoreModules } from "@test/modules";
import { HttpClientModule } from "@angular/common/http";
import { mockProviders } from "@test/providers";

describe("Service: AuthGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, ...mockProviders],
      imports: [...mockStoreModules, HttpClientModule],
    });
  });

  it("should create", inject(
    [AuthGuardService],
    (service: AuthGuardService) => {
      expect(service).toBeTruthy();
    }
  ));
});
