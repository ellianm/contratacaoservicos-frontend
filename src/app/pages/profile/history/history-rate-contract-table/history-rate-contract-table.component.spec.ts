import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRateContractTableComponent } from './history-rate-contract-table.component';

describe('HistoryRateContractTableComponent', () => {
  let component: HistoryRateContractTableComponent;
  let fixture: ComponentFixture<HistoryRateContractTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRateContractTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRateContractTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
