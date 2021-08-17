import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulateurComponent } from './regulateur.component';

describe('RegulateurComponent', () => {
  let component: RegulateurComponent;
  let fixture: ComponentFixture<RegulateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
