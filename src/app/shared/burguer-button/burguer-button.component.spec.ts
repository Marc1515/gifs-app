import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerButtonComponent } from './burguer-button.component';

describe('BurguerButtonComponent', () => {
  let component: BurguerButtonComponent;
  let fixture: ComponentFixture<BurguerButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurguerButtonComponent]
    });
    fixture = TestBed.createComponent(BurguerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
