import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsMessageComponent } from './utils-message.component';

describe('UtilsMessageComponent', () => {
  let component: UtilsMessageComponent;
  let fixture: ComponentFixture<UtilsMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilsMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
