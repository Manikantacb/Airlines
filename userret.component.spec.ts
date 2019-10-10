import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserretComponent } from './userret.component';

describe('UserretComponent', () => {
  let component: UserretComponent;
  let fixture: ComponentFixture<UserretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
