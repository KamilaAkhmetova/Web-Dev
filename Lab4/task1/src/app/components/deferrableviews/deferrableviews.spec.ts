import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deferrableviews } from './deferrableviews';

describe('Deferrableviews', () => {
  let component: Deferrableviews;
  let fixture: ComponentFixture<Deferrableviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deferrableviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deferrableviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
