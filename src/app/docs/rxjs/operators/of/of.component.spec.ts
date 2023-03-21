import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfComponent } from './of.component';

describe('OfComponent', () => {
  let component: OfComponent;
  let fixture: ComponentFixture<OfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
