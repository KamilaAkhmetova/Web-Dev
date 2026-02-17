import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentinput } from './componentinput';

describe('Componentinput', () => {
  let component: Componentinput;
  let fixture: ComponentFixture<Componentinput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentinput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentinput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
