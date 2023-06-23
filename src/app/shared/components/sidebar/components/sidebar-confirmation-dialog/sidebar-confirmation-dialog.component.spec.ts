import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConfirmationDialogComponent } from './sidebar-confirmation-dialog.component';

describe('SidebarConfirmationDialogComponent', () => {
  let component: SidebarConfirmationDialogComponent;
  let fixture: ComponentFixture<SidebarConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarConfirmationDialogComponent]
    });
    fixture = TestBed.createComponent(SidebarConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
