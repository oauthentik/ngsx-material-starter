/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { MessageService } from "./message.service";
import { mockProviders } from "@test/providers";

describe("Service: Message", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, ...mockProviders],
    });
  });

  it("should create", inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
