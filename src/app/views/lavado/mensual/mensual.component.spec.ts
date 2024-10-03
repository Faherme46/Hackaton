import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensualComponent } from './mensual.component';

describe('MensualComponent', () => {
  let component: MensualComponent;
  let fixture: ComponentFixture<MensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
