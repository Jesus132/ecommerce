import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKind2Component } from './card-kind2.component';

describe('CardKind2Component', () => {
  let component: CardKind2Component;
  let fixture: ComponentFixture<CardKind2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardKind2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardKind2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
