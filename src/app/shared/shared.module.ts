import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MaisRecentesComponent } from './components/mais-recentes/mais-recentes.component';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
   CarouselComponent,
   MaisRecentesComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports:[
    CarouselComponent,
    MaisRecentesComponent,
    MatPaginatorModule
  ]
})
export class SharedModule { }
