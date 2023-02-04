import { Component, OnInit } from '@angular/core';
import { Gallery } from '../interface/gallery';
import dados from '../../../../assets/db.json';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  results: Gallery[] = dados;
  p: number = 1;
  itensPerPage: number = 68;
  totalItens: any;

  constructor() { }

 ngOnInit(): void {
    
  }

}
