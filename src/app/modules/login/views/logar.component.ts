import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.scss']
})
export class LogarComponent implements OnInit {
  page:string = "login";

  constructor(
    private pageService : PagesService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setInterval(() => {
      this.page = this.pageService.getPage()
    }, 1000); // verifica a cada 1 segundo (1000 ms)
  }
  }



