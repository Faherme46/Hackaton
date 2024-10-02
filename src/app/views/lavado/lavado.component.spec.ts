import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavadoComponent } from './lavado.component';

describe('LavadoComponent', () => {
  let component: LavadoComponent;
  let fixture: ComponentFixture<LavadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LavadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LavadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
