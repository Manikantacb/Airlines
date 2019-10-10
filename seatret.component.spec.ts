import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatretComponent } from './seatret.component';

describe('SeatretComponent', () => {
  let component: SeatretComponent;
  let fixture: ComponentFixture<SeatretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
