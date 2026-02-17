import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updating } from './updating';

describe('Updating', () => {
  let component: Updating;
  let fixture: ComponentFixture<Updating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
