import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service'; // ajusta ruta si hace falta
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']


})
export class HeaderComponent implements OnInit, OnDestroy {

  coins: number = 0;
  private subscription!: Subscription;

  constructor(public authService: AuthService) {}

 isLoggedIn = false;


  ngOnInit() {
    // Inicializamos con las monedas actuales
    this.coins = this.authService.getCoins();
    this.subscription = this.authService.user$.subscribe(user => {
      this.isLoggedIn = !!user;
    });


    // Nos suscribimos a cambios en el usuario para actualizar monedas
    this.subscription = this.authService.user$.subscribe(user => {
      this.coins = user?.coins ?? 0;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
  closeNavbar() {
  const navbar = document.getElementById('navbarMenu');
  const bsCollapse = bootstrap.Collapse.getInstance(navbar) || new bootstrap.Collapse(navbar);
  bsCollapse.hide();
}


}

