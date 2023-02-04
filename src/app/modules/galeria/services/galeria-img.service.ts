import { Injectable } from '@angular/core';
import { Gallery } from '../../landing-page/interface/gallery';

@Injectable({
  providedIn: 'root'
})
export class GaleriaImgService {

  private imagem:Gallery = {
    nome: '',
    categoria: '',
    miniatura: '',
    dispositivo: '',
    data: ''
  }

  private device: string = "";
  private categoria: string = "";
  private ultimaPage: string = "";

  constructor() { }

  setImagem(objeto: Gallery) {
    this.imagem = objeto;
  }

  getImagem() {
    return this.imagem;
  }

  setCategoria(objeto: string) {
    this.categoria = objeto;
  }

  getCategoria() {
    return this.categoria;
  }

  setDevice(objeto: string) {
    this.device = objeto;
  }

  getDevice() {
    return this.device;
  }

  setUltimaPage(value: string) {
    this.ultimaPage = value;
  }

  getUltimaPage() {
    return this.ultimaPage;
  }

}
