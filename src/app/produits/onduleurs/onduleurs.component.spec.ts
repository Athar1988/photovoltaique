import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnduleursComponent } from './onduleurs.component';

describe('OnduleursComponent', () => {
  let component: OnduleursComponent;
  let fixture: ComponentFixture<OnduleursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnduleursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnduleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
