import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDescComponent } from './short-desc.component';

describe('ShortDescComponent', () => {
  let component: ShortDescComponent;
  let fixture: ComponentFixture<ShortDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
