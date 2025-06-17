import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from './models/register-model';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/auth';

  private userSubject = new BehaviorSubject<any>(this.getUser());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(data: RegisterModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: { usernameOrEmail: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data).pipe(
      tap((res: any) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.userSubject.next(res.user);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
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

  getCoins(): number {
    const user = this.userSubject.value;
    return user?.coins ?? 0;
  }

  // ✅ NUEVO: Método para refrescar los datos del usuario desde el backend
  refreshUser(): void {
  if (!this.isLoggedIn()) return;

  const token = this.getToken();
  if (!token) return;

  this.http.get<any>(`${this.baseUrl}/me`, {
    headers: { Authorization: `Bearer ${token}` }
  }).subscribe(user => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
    }
  });
}

}
