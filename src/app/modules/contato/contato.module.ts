import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';
import { ContatoRoutingModule } from './contato-routing.module';



@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule
  ],
  exports:[
    ContatoComponent
  ]
})
export class ContatoModule { }
