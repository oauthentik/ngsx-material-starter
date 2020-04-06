/* tslint:disable:no-unused-variable */

import { TestBed } from "@angular/core/testing";
import { DomSanitizer } from "@angular/platform-browser";
import { SafePipe } from "./safe.pipe";

describe("Pipe: Safee", () => {
  it("create an instance", () => {
    const pipe = new SafePipe(TestBed.get(DomSanitizer));
    expect(pipe).toBeTruthy();
  });
});
