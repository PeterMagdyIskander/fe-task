import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSlotCardComponent } from './one-slot-card.component';

describe('OneSlotCardComponent', () => {
  let component: OneSlotCardComponent;
  let fixture: ComponentFixture<OneSlotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneSlotCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneSlotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
