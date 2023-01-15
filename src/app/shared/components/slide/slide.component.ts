import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.slideAuto();
  }

  slideAuto(){
    let counter = 1;
    setInterval( ()=>{
      let name = 'radio' + counter;
      let elemento = document.querySelector(`input[name=${name}]` );
      if(elemento){
        
      }
      
      counter ++;
      if(counter > 6){
        counter = 1;
      }
    }, 5000);
  }

}
