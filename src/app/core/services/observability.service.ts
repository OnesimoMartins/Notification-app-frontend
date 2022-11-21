import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SystemHealth } from 'src/app/observability/models/system-healt';
import { Observable,timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SystemReadyTime } from 'src/app/observability/models/system-ready-time';


@Injectable({
  providedIn:'root'
})
export class ObservabilityService {

  private url=environment.apiUrl+'actuator'

  constructor(private http:HttpClient) { }

  public getSystemHealth():Observable<SystemHealth>{
    return this.http.get<SystemHealth>(this.url+'/health').pipe(timeout(60000))
  }

  public SystemReadyTime():Observable<SystemReadyTime>{
    return this.http.get<SystemReadyTime>(this.url+'/metrics/application.ready.time')
    .pipe(timeout(60000))
  }

  public getHttpTraces():Observable<any>{
    return this.http.get<any>(this.url+'/httptrace')
  }
}
