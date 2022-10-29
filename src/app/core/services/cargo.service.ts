import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs'
import { Cargo } from '../models/cargo.model';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl=environment.apiUrl+'cargos'

  constructor(private http:HttpClient) { }

  public getCargos():Observable<Cargo[]>{
    return this.http.get<Cargo[]>(this.baseUrl)
  }
}
