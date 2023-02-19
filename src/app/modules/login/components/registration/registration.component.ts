import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistrationData } from '../../interface/registration.interface';
import { LoginService } from '../../services/login.service';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  model: RegistrationData = {
    name: 'rr',
    email: 'yy ',
    birthdate: 'hhh',
    city: 'hhh',
    state: '77',
    password: 'ggg'
  };

  constructor(
    private loginService: LoginService,
    private pageService : PagesService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  goToLogin(){
    this.pageService.setPage('login')
  }
  register() {
    
      this.loginService.addUser(this.model);
      alert('Usuário registrado com sucesso!');
  
  }

}
