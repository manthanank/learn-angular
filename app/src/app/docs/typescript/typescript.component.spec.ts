import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptComponent } from './typescript.component';

describe('TypescriptComponent', () => {
  let component: TypescriptComponent;
  let fixture: ComponentFixture<TypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
