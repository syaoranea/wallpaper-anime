import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import usser from '../../../../assets/usser.json'
import { RegistrationData } from '../interface/registration.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'assets/usser.json';
  

  constructor(private http: HttpClient) { }

  /* getUsers(): Observable<LoginData[]> {
    return this.http.get<LoginData[]>(this.url);
  }*/

/*   getUserByEmail(email: string) {
    return this.logins.find(login => login.email === email);
  } */
   

  addUser(user: any) {
     this.http.get(this.url).subscribe((data: any) => {
    data.items.push(user);
    this.http.put(this.url, data).subscribe((response) => {
      console.log(response);
    });
  });
  }
 
}