import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enablingrouting } from './enablingrouting';

describe('Enablingrouting', () => {
  let component: Enablingrouting;
  let fixture: ComponentFixture<Enablingrouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enablingrouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enablingrouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
