import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressClientJobsTableComponent } from './in-progress-client-jobs-table.component';

describe('InProgressClientJobsTableComponent', () => {
  let component: InProgressClientJobsTableComponent;
  let fixture: ComponentFixture<InProgressClientJobsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressClientJobsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressClientJobsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
