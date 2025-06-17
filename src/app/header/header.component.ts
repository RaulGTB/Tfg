import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service'; // ajusta ruta si hace falta
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngDoCheck() {
  console.log('isLoggedIn?', this.authService.isLoggedIn());
}

}
