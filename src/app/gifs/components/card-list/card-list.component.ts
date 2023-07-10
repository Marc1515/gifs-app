import { Component, HostListener, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  public showButton: boolean = false

  @Input()
  public gifs: Gif[] = [];

  @HostListener('window:scroll', [])

  onWindowScroll() {
    this.showButton = window.pageYOffset > 100;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
