import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '../models/login.model';
import { Observable,map,of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenResponse } from '../models/token.response.model';
import { LoggedUser } from '../models/loged.user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl+"oauth/token";

  private  headers = new HttpHeaders(
    {'Content-Type':'application/x-www-form-urlencoded',
    'Authorization':'Basic RlJPTlRFTkQ6MTIz'}
    );

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(login: Login): Observable<boolean> {

    let body=`username=${login.username}&password=${login.password}&grant_type=password`

   return  this.http .post<TokenResponse>(this.url, body, {
        headers:this.headers
      }).pipe(map(response=>{

        this.saveAccessToken(response.access_token);
        this.saveRefreshToken(response.refresh_token)

        return true;
      }))

  }

  public refreshToken(): Observable<boolean> {

  if(this.jwtHelper.isTokenExpired(this.getRefreshToken()))
    return of(false)

    let body=`grant_type=refresh_token&refresh_token=${this.getRefreshToken()}`

  return this.http.post<TokenResponse>(this.url , body, {
        headers: this.headers
      }).pipe(map(response=>{

        this.saveAccessToken(response.access_token);
        this.saveRefreshToken(response.refresh_token)
        return true;

      }));

  }

  isAccessTokenInvalid() {
    const token = this.getAccessToken()
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  private  saveAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  public  getAccessToken():string{
   return localStorage.getItem('access_token')!
  }

  private saveRefreshToken(token:string){
    localStorage.setItem('refresh_token',token)
  }

  private getRefreshToken():string{
    return localStorage.getItem('refresh_token')!
  }

  private clearTokens() {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
  }

  logout(){
    this.clearTokens()
    return of(true)
  }

  getLoggedUser():LoggedUser{
   const decodedToken= this.jwtHelper.decodeToken(this.getAccessToken())
   const loggedUser=new LoggedUser()
   loggedUser.authorities= decodedToken.authorities
   loggedUser.id=decodedToken.id
   return loggedUser
  }

  isAdministrador(){
  const authorities= this.jwtHelper.decodeToken( this.getAccessToken()).authorities as [string]

    return authorities.includes('Administrador')
  }

}
