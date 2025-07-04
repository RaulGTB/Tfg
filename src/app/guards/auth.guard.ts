import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;  // Permite acceder a la ruta
    } else {
      this.router.navigate(['/login']);  // Redirige a login si no hay token
      return false;
    }
  }
}
