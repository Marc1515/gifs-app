import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { BurguerButtonComponent } from './burguer-button/burguer-button.component';
import { SidebarConfirmationDialogComponent } from './components/sidebar/components/sidebar-confirmation-dialog/sidebar-confirmation-dialog.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,
    BurguerButtonComponent,
    SidebarConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent,
    BurguerButtonComponent
  ]
})
export class SharedModule { }
