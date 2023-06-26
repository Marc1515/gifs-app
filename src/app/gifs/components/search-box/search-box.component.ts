import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { SharedSidebarService } from 'src/app/shared/components/sidebar/shared-sidebar.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>


  constructor( private gifsService: GifsService, private sharedSidebarService: SharedSidebarService ) {}


  searchTag() {

    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

    this.sharedSidebarService.tagClicked.emit();

    this.sharedSidebarService.sidebarToggled.emit();

  }


}
