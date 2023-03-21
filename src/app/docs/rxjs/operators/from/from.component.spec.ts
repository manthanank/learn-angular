import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromComponent } from './from.component';

describe('FromComponent', () => {
  let component: FromComponent;
  let fixture: ComponentFixture<FromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
