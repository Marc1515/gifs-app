import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSidebarService {

  public isSidebarVisibleService: boolean = true; // Agrega esta propiedad

  constructor() { }

  sidebarToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  tagClicked: EventEmitter<string> = new EventEmitter<string>();

}
