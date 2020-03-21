/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppMenuService } from './app-menu.service';

describe('Service: AppMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppMenuService]
    });
  });

  it('should ...', inject([AppMenuService], (service: AppMenuService) => {
    expect(service).toBeTruthy();
  }));
});
