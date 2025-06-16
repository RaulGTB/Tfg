import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from './models/register-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/auth/register'; // cambia esto a tu API real

  constructor(private http: HttpClient) { }

  register(data: RegisterModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
