import { TestBed } from '@angular/core/testing';

import { MatTableAdvancedService } from './mat-table-advanced.service';

describe('MatTableAdvancedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatTableAdvancedService = TestBed.get(MatTableAdvancedService);
    expect(service).toBeTruthy();
  });
});
