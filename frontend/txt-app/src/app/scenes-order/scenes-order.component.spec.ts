import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesOrderComponent } from './scenes-order.component';

describe('ScenesOrderComponent', () => {
  let component: ScenesOrderComponent;
  let fixture: ComponentFixture<ScenesOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenesOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
