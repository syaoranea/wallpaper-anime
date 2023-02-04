import { APP_BASE_HREF } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaModule } from './modules/galeria/galeria.module';
import { ImgPageModule } from './modules/img-page/img-page.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LandingPageModule,
    ImgPageModule,
    GaleriaModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    },/* 
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    } */
    
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }