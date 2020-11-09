import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicConfigMaidComponent } from './dynamic-config-maid.component';

describe('DynamicConfigMaidComponent', () => {
  let component: DynamicConfigMaidComponent;
  let fixture: ComponentFixture<DynamicConfigMaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicConfigMaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicConfigMaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
