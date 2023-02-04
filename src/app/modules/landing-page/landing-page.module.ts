import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';
import { LandingPageComponent } from './views/landing-page.component';
import { ResumoComponent } from './components/resumo/resumo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { landingPageRoutingModule } from './landing-page-routing.module';
import { ImgPageComponent } from './components/img-page/img-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeadingComponent,
    LandingPageComponent,
    ResumoComponent,
    ImgPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    landingPageRoutingModule,
    FormsModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule { }
