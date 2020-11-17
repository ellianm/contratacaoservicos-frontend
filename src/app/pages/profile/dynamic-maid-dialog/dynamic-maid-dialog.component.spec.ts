import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMaidDialogComponent } from './dynamic-maid-dialog.component';

describe('DynamicMaidDialogComponent', () => {
  let component: DynamicMaidDialogComponent;
  let fixture: ComponentFixture<DynamicMaidDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMaidDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMaidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
