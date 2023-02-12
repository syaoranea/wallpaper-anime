import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { STATES } from './contato.states';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: STATES })
  ]
})
export class ContatoRoutingModule { }