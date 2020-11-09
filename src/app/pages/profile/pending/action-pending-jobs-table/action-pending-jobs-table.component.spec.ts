import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPendingJobsTableComponent } from './action-pending-jobs-table.component';

describe('ActionPendingJobsTableComponent', () => {
  let component: ActionPendingJobsTableComponent;
  let fixture: ComponentFixture<ActionPendingJobsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPendingJobsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPendingJobsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
