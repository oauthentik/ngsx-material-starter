import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableAdvancedComponent } from './mat-table-advanced.component';

describe('MatTableAdvancedComponent', () => {
  let component: MatTableAdvancedComponent;
  let fixture: ComponentFixture<MatTableAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
