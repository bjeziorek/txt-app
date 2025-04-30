import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSetDataComponent } from './inner-set-data.component';

describe('InnerSetDataComponent', () => {
  let component: InnerSetDataComponent;
  let fixture: ComponentFixture<InnerSetDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerSetDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerSetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
