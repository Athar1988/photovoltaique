import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesolaireComponent } from './modulesolaire.component';

describe('ModulesolaireComponent', () => {
  let component: ModulesolaireComponent;
  let fixture: ComponentFixture<ModulesolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesolaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
