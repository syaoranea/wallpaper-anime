import { Component, OnInit, Output } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { EventEmitter } from 'stream';
import { PagesService } from '../../services/pages.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   constructor(
    private stateService: StateService,
    private pageService : PagesService
   // private loginService: LoginService,
  ){}

 /*  model: RegistrationData = {
    name: '',
    email: '',
    birthdate: '',
    city: '',
    state: '',
    password: ''
  }; */

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goToRegistration(){      
    console.log('register');
      
   this.pageService.setPage('register')
  }

  /* authenticate() {
    const user = this.loginService.getUserByEmail(this.model.email);
    if (user && user.password === this.model.password) {
      this.router.navigateByUrl('/profile');
    } else {
      alert('Email ou senha inválidos!');
    }
  } */
}
