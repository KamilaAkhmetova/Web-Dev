import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentoutput } from './componentoutput';

describe('Componentoutput', () => {
  let component: Componentoutput;
  let fixture: ComponentFixture<Componentoutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentoutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentoutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
