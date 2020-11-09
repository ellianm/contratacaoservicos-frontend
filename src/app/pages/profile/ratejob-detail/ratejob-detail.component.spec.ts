import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatejobDetailComponent } from './ratejob-detail.component';

describe('RatejobDetailComponent', () => {
  let component: RatejobDetailComponent;
  let fixture: ComponentFixture<RatejobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatejobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatejobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
