import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleBookflightComponent } from './reschedule-bookflight.component';

describe('RescheduleBookflightComponent', () => {
  let component: RescheduleBookflightComponent;
  let fixture: ComponentFixture<RescheduleBookflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescheduleBookflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescheduleBookflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
