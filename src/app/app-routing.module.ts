import { LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular'
import { environment } from 'src/environments/environment';


@NgModule({
  imports: [UIRouterModule.forRoot()],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: environment.locationStrategy, 
    }
  ],
  exports:[UIRouterModule]
})
export class AppRoutingModule { }
