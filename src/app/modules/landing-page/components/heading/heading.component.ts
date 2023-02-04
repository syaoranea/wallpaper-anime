import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
   template: `
    <input type="text" [(ngModel)]="searchTerm">
  `
})
export class HeadingComponent implements OnInit {

    searchTerm: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  searchImg(){
    console.log(this.searchTerm);
    
  }

}
