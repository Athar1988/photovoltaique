import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampesComponent } from './lampes.component';

describe('LampesComponent', () => {
  let component: LampesComponent;
  let fixture: ComponentFixture<LampesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LampesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LampesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
