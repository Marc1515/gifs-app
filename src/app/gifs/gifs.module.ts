import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBoxComponent } from './components/search-box/search-box.component';

import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
