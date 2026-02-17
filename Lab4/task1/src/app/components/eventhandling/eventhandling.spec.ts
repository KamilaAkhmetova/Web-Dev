import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventhandling } from './eventhandling';

describe('Eventhandling', () => {
  let component: Eventhandling;
  let fixture: ComponentFixture<Eventhandling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventhandling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventhandling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
