import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routeuser } from './routeuser';

describe('Routeuser', () => {
  let component: Routeuser;
  let fixture: ComponentFixture<Routeuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routeuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Routeuser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
