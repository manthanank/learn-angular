import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsComponent } from './decorators.component';

describe('DecoratorsComponent', () => {
  let component: DecoratorsComponent;
  let fixture: ComponentFixture<DecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
