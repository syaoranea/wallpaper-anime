import { Component, Input, OnInit, Output } from '@angular/core';
import { Gallery } from '../../../modules/landing-page/interface/gallery';
import { StateService } from '@uirouter/angular';
import { GaleriaImgService } from 'src/app/modules/galeria/services/galeria-img.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  @Input()
  results!: Gallery[];
  @Output() eventGo: any = {};

  p: number = 1;
  itensPerPage: number = 67;
  totalItens: any;
  endereco: string ='';

  constructor(
    private stateService: StateService,
    private serviceGaleria: GaleriaImgService,
  ){}

 ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(){
    this.totalItens = this.results.length;
  }

  abrirImg(result:any){  
    this.serviceGaleria.setImagem(result);
    this.stateService.go('img-page', {}, { location: false });
  }

}
