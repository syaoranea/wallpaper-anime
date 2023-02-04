import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { GaleriaImgService } from '../../galeria/services/galeria-img.service';
import { Gallery } from '../../landing-page/interface/gallery';
import { Location } from '@angular/common';

@Component({
  selector: 'app-img-page',
  templateUrl: './img-page.component.html',
  styleUrls: ['./img-page.component.scss']
})
export class ImgPageComponent implements OnInit {

   @ViewChild('yourImage') yourImage: ElementRef | undefined;
   
  result: Gallery = {
    nome: '',
    categoria: '',
    miniatura: '',
    dispositivo: '',
    data: '',
    url: ''
  }

  constructor(
    private serviceGaleria: GaleriaImgService,
    private stateService: StateService,
    ) { }

  ngOnInit(): void {
   this.result = this.serviceGaleria.getImagem();
  }

  goToBack(){
    this.stateService.go('galeria-img', {}, { location: false });
  }

  zoomImage() {
    this.yourImage?.nativeElement.classList.toggle('zoomed');
  }

  downloadImg(){
    const link = document.createElement('a');
    link.href = this.result.url || '';
    link.download = this.result.nome;
    link.click();
    link.remove();


  }

}
