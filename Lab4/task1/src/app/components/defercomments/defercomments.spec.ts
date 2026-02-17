import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defercomments } from './defercomments';

describe('Defercomments', () => {
  let component: Defercomments;
  let fixture: ComponentFixture<Defercomments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defercomments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Defercomments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
