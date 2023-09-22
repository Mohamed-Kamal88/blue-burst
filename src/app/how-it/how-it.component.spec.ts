import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItComponent } from './how-it.component';

describe('HowItComponent', () => {
  let component: HowItComponent;
  let fixture: ComponentFixture<HowItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowItComponent]
    });
    fixture = TestBed.createComponent(HowItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
