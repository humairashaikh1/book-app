import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardssComponent } from './cardss.component';

describe('CardssComponent', () => {
  let component: CardssComponent;
  let fixture: ComponentFixture<CardssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardssComponent]
    });
    fixture = TestBed.createComponent(CardssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
