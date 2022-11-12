import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../models/dashboard.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url=environment.apiUrl+'resumo'

  constructor(private http: HttpClient) { }

  getDashBoard():Observable<Dashboard>{
    return this.http.get<Dashboard>(this.url)
  }
}
