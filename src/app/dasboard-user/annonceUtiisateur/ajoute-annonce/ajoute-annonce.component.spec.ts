import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteAnnonceComponent } from './ajoute-annonce.component';

describe('AjouteAnnonceComponent', () => {
  let component: AjouteAnnonceComponent;
  let fixture: ComponentFixture<AjouteAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
