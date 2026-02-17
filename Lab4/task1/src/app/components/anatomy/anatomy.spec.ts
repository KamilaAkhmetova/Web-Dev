import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anatomy } from './anatomy';

describe('Anatomy', () => {
  let component: Anatomy;
  let fixture: ComponentFixture<Anatomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anatomy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anatomy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
