import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { BurguerButtonComponent } from './burguer-button/burguer-button.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,
    BurguerButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent,
    BurguerButtonComponent
  ]
})
export class SharedModule { }
