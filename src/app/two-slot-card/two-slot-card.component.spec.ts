import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSlotCardComponent } from './two-slot-card.component';

describe('TwoSlotCardComponent', () => {
  let component: TwoSlotCardComponent;
  let fixture: ComponentFixture<TwoSlotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoSlotCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoSlotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
