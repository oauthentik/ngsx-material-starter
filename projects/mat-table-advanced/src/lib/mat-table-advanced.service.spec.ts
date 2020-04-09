import { TestBed } from "@angular/core/testing";

import { MatTableAdvancedService } from "./mat-table-advanced.service";
import { MockClass } from "./mocks";
describe("MatTableAdvancedService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [MatTableAdvancedService],
    })
  );

  it("should be created", () => {
    const service: MatTableAdvancedService = TestBed.get(
      MatTableAdvancedService
    );
    expect(service).toBeTruthy();
  });
  it("should return a list of Columns when passed a registred table type", () => {
    const service: MatTableAdvancedService = TestBed.get(
      MatTableAdvancedService
    );
    spyOn(service, "getColumnsOfType").and.callThrough();
    const columns = service.getColumnsOfType(MockClass);
    expect(service.getColumnsOfType).toHaveBeenCalledWith(MockClass);
    expect(columns).toBeTruthy();
    expect(columns.length).toEqual(2);
    expect(columns[0].key).toEqual("foo");
    expect(columns[1].key).toEqual("bar");
  });
});
