import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePendingJobsTableComponent } from './rate-pending-jobs-table.component';

describe('RatePendingJobsTableComponent', () => {
  let component: RatePendingJobsTableComponent;
  let fixture: ComponentFixture<RatePendingJobsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatePendingJobsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePendingJobsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
