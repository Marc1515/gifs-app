import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { SharedSidebarService } from './shared-sidebar.service';
import { MatDialog } from '@angular/material/dialog';
import { SidebarConfirmationDialogComponent } from './components/sidebar-confirmation-dialog/sidebar-confirmation-dialog.component';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public isSidebarVisible: boolean = true;
  public isOpen: boolean = false;

  constructor(private gifsService:GifsService, private sharedSidebarService: SharedSidebarService, public dialog: MatDialog) {

    this.sharedSidebarService.sidebarToggled.subscribe((isOpen: boolean) => {
      this.isSidebarVisible = !isOpen;
    });

  }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag)
    if (!this.isSidebarVisible) {
      this.isSidebarVisible = true;
      this.sharedSidebarService.tagClicked.emit(tag);  // Ocultar la barra lateral
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SidebarConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetTag()
      } else {
        // El usuario hizo clic en "No" o cerró el cuadro de diálogo.
      }
    });
  }


  resetTag() {
    this.gifsService.resetTags();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }


}
