import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCepComponent } from './user-cep.component';

describe('UserCepComponent', () => {
  let component: UserCepComponent;
  let fixture: ComponentFixture<UserCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
