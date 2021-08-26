import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteProjetAdminComponent } from './ajoute-projet-admin.component';

describe('AjouteProjetAdminComponent', () => {
  let component: AjouteProjetAdminComponent;
  let fixture: ComponentFixture<AjouteProjetAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteProjetAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteProjetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
