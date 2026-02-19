import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routehome } from './routehome';

describe('Routehome', () => {
  let component: Routehome;
  let fixture: ComponentFixture<Routehome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routehome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Routehome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
