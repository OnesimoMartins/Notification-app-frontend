import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ObservabilityService {

  private url=environment.apiUrl+'pedidos'

  constructor(private http:HttpClient) { }

}
