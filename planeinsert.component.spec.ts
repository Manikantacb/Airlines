import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneinsertComponent } from './planeinsert.component';

describe('PlaneinsertComponent', () => {
  let component: PlaneinsertComponent;
  let fixture: ComponentFixture<PlaneinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
