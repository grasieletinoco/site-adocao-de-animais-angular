import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdocaoComponent } from './card-adocao.component';

describe('CardAdocaoComponent', () => {
  let component: CardAdocaoComponent;
  let fixture: ComponentFixture<CardAdocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAdocaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
