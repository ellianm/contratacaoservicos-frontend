import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAvaliationsComponent } from './last-avaliations.component';

describe('LastAvaliationsComponent', () => {
  let component: LastAvaliationsComponent;
  let fixture: ComponentFixture<LastAvaliationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAvaliationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAvaliationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
