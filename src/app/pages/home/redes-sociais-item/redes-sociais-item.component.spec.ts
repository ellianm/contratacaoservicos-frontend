import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociaisItemComponent } from './redes-sociais-item.component';

describe('RedesSociaisItemComponent', () => {
  let component: RedesSociaisItemComponent;
  let fixture: ComponentFixture<RedesSociaisItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesSociaisItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesSociaisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
