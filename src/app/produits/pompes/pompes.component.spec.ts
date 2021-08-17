import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompesComponent } from './pompes.component';

describe('PompesComponent', () => {
  let component: PompesComponent;
  let fixture: ComponentFixture<PompesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PompesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PompesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
