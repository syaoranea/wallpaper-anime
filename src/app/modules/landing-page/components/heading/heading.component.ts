import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { GaleriaImgService } from 'src/app/modules/galeria/services/galeria-img.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
   template: `
    <input type="text" [(ngModel)]="searchTerm">
  `
})
export class HeadingComponent implements OnInit {

    searchTerm: string = '';

  constructor(
    private serviceGaleria: GaleriaImgService,
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
  }

  searchImg(){
    this.serviceGaleria.setSearch(this.searchTerm);
    this.stateService.go('galeria-img', {}, { location: false});    
  }

}
