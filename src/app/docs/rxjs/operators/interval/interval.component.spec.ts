import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalComponent } from './interval.component';

describe('IntervalComponent', () => {
  let component: IntervalComponent;
  let fixture: ComponentFixture<IntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
