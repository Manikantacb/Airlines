import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingretComponent } from './bookingret.component';

describe('BookingretComponent', () => {
  let component: BookingretComponent;
  let fixture: ComponentFixture<BookingretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
