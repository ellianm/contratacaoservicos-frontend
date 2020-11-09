import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationStarsComponent } from './avaliation-stars.component';

describe('AvaliationStarsComponent', () => {
  let component: AvaliationStarsComponent;
  let fixture: ComponentFixture<AvaliationStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliationStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliationStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
