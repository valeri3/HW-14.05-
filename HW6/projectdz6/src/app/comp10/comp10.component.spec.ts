import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp10Component } from './comp10.component';

describe('Comp10Component', () => {
  let component: Comp10Component;
  let fixture: ComponentFixture<Comp10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
