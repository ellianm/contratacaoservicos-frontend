import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryActionJobsTableComponent } from './history-action-jobs-table.component';

describe('HistoryActionJobsTableComponent', () => {
  let component: HistoryActionJobsTableComponent;
  let fixture: ComponentFixture<HistoryActionJobsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryActionJobsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryActionJobsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
