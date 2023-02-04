import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaImgComponent } from './views/galeria.component';
import { galeriaRoutingModule } from './galeria-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
    declarations: [
        GaleriaImgComponent
    ],
    exports: [
        GaleriaImgComponent
    ],
    imports: [
        CommonModule,
        galeriaRoutingModule,
        SharedModule,
    ]
})
export class GaleriaModule { }
