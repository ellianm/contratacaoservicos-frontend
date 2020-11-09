import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicConfigResolverComponent } from './dynamic-config-resolver.component';

describe('DynamicConfigResolverComponent', () => {
  let component: DynamicConfigResolverComponent;
  let fixture: ComponentFixture<DynamicConfigResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicConfigResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicConfigResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
