import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MaisRecentesComponent } from './components/mais-recentes/mais-recentes.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { GaleriaComponent } from './components/galeria/galeria.component';



@NgModule({
  declarations: [
   CarouselComponent,
   MaisRecentesComponent,
   GaleriaComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
    
  ],
  exports:[
    CarouselComponent,
    MaisRecentesComponent,
    NgxPaginationModule,
    GaleriaComponent

  ]
})
export class SharedModule { }
