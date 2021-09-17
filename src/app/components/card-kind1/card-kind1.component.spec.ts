import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKind1Component } from './card-kind1.component';

describe('CardKind1Component', () => {
  let component: CardKind1Component;
  let fixture: ComponentFixture<CardKind1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardKind1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardKind1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
