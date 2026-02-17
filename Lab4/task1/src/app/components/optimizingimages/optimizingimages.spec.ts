import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Optimizingimages } from './optimizingimages';

describe('Optimizingimages', () => {
  let component: Optimizingimages;
  let fixture: ComponentFixture<Optimizingimages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Optimizingimages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Optimizingimages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
