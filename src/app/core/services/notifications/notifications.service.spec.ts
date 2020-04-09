/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { NotificationsService } from "./notifications.service";
import { MatSnackBarModule } from "@angular/material";

describe("Service: Notifications", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService],
      imports: [MatSnackBarModule],
    });
  });

  it("should ...", inject(
    [NotificationsService],
    (service: NotificationsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
