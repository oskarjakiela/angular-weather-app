import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule
  ]
})
export class AppMaterialModule { }
