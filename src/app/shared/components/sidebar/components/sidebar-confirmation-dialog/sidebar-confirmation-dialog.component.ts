import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar-confirmation-dialog',
  templateUrl: './sidebar-confirmation-dialog.component.html',
  styleUrls: ['./sidebar-confirmation-dialog.component.css']
})
export class SidebarConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SidebarConfirmationDialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

}
