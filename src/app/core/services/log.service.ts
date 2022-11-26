import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http:HttpClient) { }

  url=environment.apiUrl+'logs'

  log(msg:string){
    this.http.post(this.url,msg).subscribe();
  }
}
