import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneretComponent } from './planeret.component';

describe('PlaneretComponent', () => {
  let component: PlaneretComponent;
  let fixture: ComponentFixture<PlaneretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
