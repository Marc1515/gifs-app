import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';


const GIPHY_API_KEY = 'Er2HU62YEsEMKoepR3GAxvsaKq3Emmlz';

@Injectable({providedIn: 'root'})
export class GifsService {


  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = GIPHY_API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
   }


  get tagsHistory() {
    return [...this._tagsHistory];
  }


  private organizedHistory(tag: string) {

    /* Si el string que llega está vacio, que la función no haga nada */
    if (tag.length === 0) return;

    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10)
    this.saveLocalStorage()

  }

  private saveLocalStorage(): void {

    localStorage.setItem('history', JSON.stringify(this._tagsHistory))

  }


  private loadLocalStorage(): void {

    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')! )

    if (this._tagsHistory.length === 0 ) return;

    this.searchTag(this._tagsHistory[0])


  }


  searchTag(tag: string):void {

    this.organizedHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe(resp => {

        this.gifsList = resp.data;

        console.log({ gifs: this.gifsList })
      })


    /*
      * Opción alternativa al paquete http de Angular de como se haría con un simple fetch de JS
        fetch('https://api.giphy.com/v1/gifs/search?api_key=Er2HU62YEsEMKoepR3GAxvsaKq3Emmlz&q=valorant&limit=10')
        .then(resp => resp.json())
        .then(data => console.log(data)) */

  }

  resetTags() {
    this._tagsHistory = [];
    this.gifsList = [];
    this.saveLocalStorage();
  }


}
