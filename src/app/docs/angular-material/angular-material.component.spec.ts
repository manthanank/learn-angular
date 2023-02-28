import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialComponent } from './angular-material.component';

describe('AngularMaterialComponent', () => {
  let component: AngularMaterialComponent;
  let fixture: ComponentFixture<AngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
