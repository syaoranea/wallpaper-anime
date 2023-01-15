import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../interface/gallery';
import dados from '../../../../../assets/db.json';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  
  constructor() { }

  

  ngOnInit(): void {
    
  }
  result: Gallery[] = dados;
}
