import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from './models/register-model';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(data: RegisterModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

 // En el formulario, tienes un input llamado 'usernameOrEmail', que puede ser el email o el nombre de usuario

login(data: { usernameOrEmail: string; password: string }): Observable<any> {
  return this.http.post(`${this.baseUrl}/login`, {
    usernameOrEmail: data.usernameOrEmail,
    password: data.password
  }).pipe(
    tap((res: any) => {
      if (res && res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
      }
    })
  );
}



  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
