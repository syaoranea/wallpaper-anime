import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgPageComponent } from './views/img-page.component';
import { imgPageRoutingModule } from './img-page-routing.module';

@NgModule({
  declarations: [
    ImgPageComponent,
    
  ],
  imports: [
    CommonModule,
    imgPageRoutingModule
  ]
})
export class ImgPageModule { }
