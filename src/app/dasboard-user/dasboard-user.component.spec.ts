import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardUserComponent } from './dasboard-user.component';

describe('DasboardUserComponent', () => {
  let component: DasboardUserComponent;
  let fixture: ComponentFixture<DasboardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
