import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composition } from './composition';

describe('Composition', () => {
  let component: Composition;
  let fixture: ComponentFixture<Composition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
