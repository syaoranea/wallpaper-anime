import { Component, OnInit } from '@angular/core';
import { GaleriaImgService } from '../services/galeria-img.service';
import dados from '../../../../assets/db.json';
import { Gallery } from '../../landing-page/interface/gallery';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-galeria-img',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaImgComponent implements OnInit {
  p: number = 1;
  itensPerPage: number = 67;
  totalItens: any;
  endereco: string ='';
  categoria:any;
  device:any;
  ultimaPage:any;
  results: Gallery[] = dados;
  
  constructor(
    private serviceGaleria: GaleriaImgService,
    private stateService: StateService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.filterValue();
    this.retrieveData();
  }

  get filteredItems() {
    if(this.ultimaPage === 'categoria'){
      return this.results.filter(item => item.categoria.includes(this.categoria));
    }

    
    return this.results.filter(item => item.dispositivo.includes(this.device));
  }

  retrieveData(){
    this.totalItens = this.results.length;
  }

  abrirImg(result:any){  
    this.serviceGaleria.setImagem(result);
    this.stateService.go('img-page', {}, { location: false });
  }

  gotoScrool(){
    window.scrollTo(0, 0);
  }

  filterValue(){
    this.categoria = this.serviceGaleria.getCategoria();
    this.device = this.serviceGaleria.getDevice();
    this.ultimaPage = this.serviceGaleria.getUltimaPage();
  }
}
