import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { LandingPageComponent } from './views/landing-page.component';
import { ResumoComponent } from './components/resumo/resumo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { landingPageRoutingModule } from './landing-page-routing.module';



@NgModule({
  declarations: [
    HeadingComponent,
    GaleriaComponent,
    LandingPageComponent,
    ResumoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    landingPageRoutingModule,
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
