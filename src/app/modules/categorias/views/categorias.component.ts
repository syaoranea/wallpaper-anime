import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { GaleriaImgService } from '../../galeria/services/galeria-img.service';
import categoria from '../../landing-page/interface/categorias.json';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categories: any
  constructor(
    private stateService: StateService,
    private serviceGaleria: GaleriaImgService,
  ) { }

  ngOnInit(): void {
    this.categories = categoria
  }


  gocategorie(categoria: string){
    this.serviceGaleria.setCategoria(categoria);
    this.serviceGaleria.setUltimaPage('categoria');
    this.stateService.go('galeria-img', {}, { location: false });
  }
}