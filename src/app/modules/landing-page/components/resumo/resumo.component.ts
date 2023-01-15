import { Component, OnInit } from '@angular/core';
import { Categories } from '../../interface/categorias';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
  }

  categories: Categories[] = [Categories.Animação, Categories.Animes, Categories.Cosplay, Categories.Ecchi, Categories.Games, Categories.Hentai, Categories.Pixel, Categories.Retro];

  
}
