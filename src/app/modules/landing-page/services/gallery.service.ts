import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gallery } from '../interface/gallery';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  urlToJson = 'assets/db.json';
  constructor(private http: HttpClient) { }

  findAll(): Observable<Gallery[]>{
    return this.http.get<Gallery[]>(this.urlToJson);
  }

}
