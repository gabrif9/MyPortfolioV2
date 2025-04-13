import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBubbleComponent } from './tech-bubble.component';

describe('TechBubbleComponent', () => {
  let component: TechBubbleComponent;
  let fixture: ComponentFixture<TechBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechBubbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
