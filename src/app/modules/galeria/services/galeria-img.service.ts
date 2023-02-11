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
    date: ''
  }

  private device: string = "";
  private categoria: string = "";
  private ultimaPage: string = "";
  private search: string = ""

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

  setSearch(value: string) {
    this.search = value;
  }

  geSearch() {
    return this.search;
  }

  orderByData(value:any[]){
    let items = value
    items.forEach(item => item.date = new Date(item.date));
    console.log(items);
    
   return items.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
