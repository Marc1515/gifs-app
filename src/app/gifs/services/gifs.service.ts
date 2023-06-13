import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {


  private _tagsHistory: string[] = [];


  constructor() { }


  get tagsHistory() {
    return [...this._tagsHistory];
  }


  private organizedHistory(tag: string) {

    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10)

  }

  searchTag(tag: string): void {

    /* Si el string que llega está vacio, que la función no haga nada */
    if (tag.length === 0) return;
    this.organizedHistory(tag);

    console.log(this.tagsHistory)

  }


}
