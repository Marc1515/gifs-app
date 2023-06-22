import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { SharedSidebarService } from './shared-sidebar.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public isSidebarVisible: boolean = true;
  public isOpen: boolean = false;

  constructor(private gifsService:GifsService, private sharedSidebarService: SharedSidebarService) {

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

  resetTag() {
    this.gifsService.resetTags();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }


}
