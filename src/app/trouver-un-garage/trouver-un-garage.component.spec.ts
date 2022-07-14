import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverUnGarageComponent } from './trouver-un-garage.component';

describe('TrouverUnGarageComponent', () => {
  let component: TrouverUnGarageComponent;
  let fixture: ComponentFixture<TrouverUnGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrouverUnGarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouverUnGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
