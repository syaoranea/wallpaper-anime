import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { ContatoModule } from './modules/contato/contato.module';
import { GaleriaModule } from './modules/galeria/galeria.module';
import { ImgPageModule } from './modules/img-page/img-page.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { LoginModule } from './modules/login/login.module';
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
    GaleriaModule,
    ContatoModule,
    CategoriasModule,
    AdminModule,
    LoginModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    },
    
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }