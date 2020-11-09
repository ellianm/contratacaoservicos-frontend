import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosDeUsoePrivacidadeComponent } from './termos-de-usoe-privacidade.component';

describe('TermosDeUsoePrivacidadeComponent', () => {
  let component: TermosDeUsoePrivacidadeComponent;
  let fixture: ComponentFixture<TermosDeUsoePrivacidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosDeUsoePrivacidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosDeUsoePrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
