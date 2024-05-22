import { CredentialsInst } from '../../../app/Models/credentialsInst.model';
import { CredentialsPais } from '../../../app/Models/credentialsPais.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7030/api/Auth'

  constructor(private http:HttpClient){}
  registerPais(UserPais: any): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/cadastro-pais`, UserPais);
  }

  registerInst(UserInst: any): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/cadastro-inst`, UserInst);
  }

  loginInst(CredentialsInst: CredentialsInst): Observable<any> {

    return this.http.post(`${this.apiUrl}/login-inst`, CredentialsInst)
    .pipe(map((response: any) =>
      {
        localStorage.setItem('token', response.token);
        return response;
      }));
  }

  loginPais(CredentialsPais: CredentialsPais): Observable<any> {
    return this.http.post(`${this.apiUrl}/login-pais`, CredentialsPais)
    .pipe(map((response: any) =>
      {
        localStorage.setItem('token', response.token);
        return response;
      }));
  }
  logout() {
    localStorage.removeItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
