import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forcontrol } from './forcontrol';

describe('Forcontrol', () => {
  let component: Forcontrol;
  let fixture: ComponentFixture<Forcontrol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forcontrol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forcontrol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
