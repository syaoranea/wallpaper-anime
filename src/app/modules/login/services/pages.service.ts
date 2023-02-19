import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  page: string = "login"

  constructor() { }

  getPage(){
    return this.page
  }

  setPage(value: string){
    this.page = value
  }
  
}
