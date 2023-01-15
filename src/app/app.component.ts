import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'wallpaper-anime';

  constructor(
    private stateService: StateService
  ){}
  ngOnInit() {
    this.stateService.go('landing-page', {}, { location: false });
  }
}
