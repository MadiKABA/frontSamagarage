import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUtilisateursComponent } from './form-utilisateurs.component';

describe('FormUtilisateursComponent', () => {
  let component: FormUtilisateursComponent;
  let fixture: ComponentFixture<FormUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUtilisateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
