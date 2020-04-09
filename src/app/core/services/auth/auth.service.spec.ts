import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { mockProviders } from "@test/providers";
import { mockStoreModules } from "@test/modules";

describe("AuthService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ...mockStoreModules],
      providers: [...mockProviders],
    });
  });

  it("should be created", () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
