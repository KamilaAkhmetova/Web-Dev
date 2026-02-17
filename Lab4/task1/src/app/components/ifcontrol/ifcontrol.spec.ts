import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifcontrol } from './ifcontrol';

describe('Ifcontrol', () => {
  let component: Ifcontrol;
  let fixture: ComponentFixture<Ifcontrol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ifcontrol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifcontrol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
