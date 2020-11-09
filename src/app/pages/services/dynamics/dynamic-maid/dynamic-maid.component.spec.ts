import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMaidComponent } from './dynamic-maid.component';

describe('DynamicMaidComponent', () => {
  let component: DynamicMaidComponent;
  let fixture: ComponentFixture<DynamicMaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicMaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
