import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'wallpaper-anime';
   @ViewChild('section1', { static: false }) section1: ElementRef | undefined;
  @ViewChild('section2', { static: false })  section2: ElementRef | undefined;

  constructor(
    private stateService: StateService
  ){}
  ngOnInit() {
    this.stateService.go('landing-page', {}, { location: false });
  }

  goToGalery(){      
    this.stateService.go('galeria-img', {}, { location: false });
  }

  scrollTo(section: string) {
    console.log('111');
    const link =  document.createElement('a');
    link.href = '#'+ section;
    document.body.appendChild(link);
    link.click();
    link.remove();

  }

  goToContato(){
     this.stateService.go('contato', {}, { location: false});
  }

  goToCategoria(){
     this.stateService.go('categorias', {}, { location: false});
  }
}
