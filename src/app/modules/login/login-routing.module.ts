import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { STATES } from './login.states';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: STATES })
  ]
})
export class loginRoutingModule { }