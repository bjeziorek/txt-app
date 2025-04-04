import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTextComponent } from './main-text.component';

describe('MainTextComponent', () => {
  let component: MainTextComponent;
  let fixture: ComponentFixture<MainTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
