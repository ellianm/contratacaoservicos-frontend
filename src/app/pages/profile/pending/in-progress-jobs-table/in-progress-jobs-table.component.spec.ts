import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressJobsTableComponent } from './in-progress-jobs-table.component';

describe('InProgressJobsTableComponent', () => {
  let component: InProgressJobsTableComponent;
  let fixture: ComponentFixture<InProgressJobsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressJobsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressJobsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
