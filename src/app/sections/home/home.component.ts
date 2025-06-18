import { Component, OnInit } from '@angular/core';  // Agregué OnInit para usar ngOnInit
import { CommonModule } from '@angular/common';
import { DataService } from './../../data.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  // Corregí 'styleUrl' por 'styleUrls'
})
export class HomeComponent implements OnInit {
  constructor(private data: DataService, private authService: AuthService) {
    this.getDpts();
    this.getTeams();
    this.getPlayers();
    this.getMatches();
  }

  games: any[] = [];
  filteredGames: any[] = [];
  teams: any[] = [];
  players: any[] = [];
  matches: any[] = [];
  currentView: string = 'teams';

  // === Tarjetas de videojuegos ===
  gameCards = [
    {
      name: 'League of Legends',
      img: 'assets/images/lol-home.jpg',
      desc: 'MOBA 5 vs 5 de Riot Games. Objetivo: destruir el nexo rival.',
      open: false,
    },
    {
      name: 'Dota 2',
      img: 'assets/images/dota2-home.jpg',
      desc: 'MOBA de Valve basado en el mod original de Warcraft III.',
      open: false,
    },
    {
      name: 'CS:GO',
      img: 'assets/images/csgo-home.jpg',
      desc: 'Shooter táctico 5 vs 5. Terroristas vs Antiterroristas.',
      open: false,
    },
    {
      name: 'Valorant',
      img: 'assets/images/valorant-home.jpg',
      desc: 'Shooter táctico de Riot con habilidades únicas por agente.',
      open: false,
    },
  ];

  toggleCard(i: number): void {
    this.gameCards.forEach((c, index) => (c.open = i === index));
  }

  // === Lógica de datos ===
  getDpts() {
    this.data.getLeagues().subscribe((res: any) => {
      this.games = res;
      this.filteredGames = this.games;
    });
  }

  getTeams() {
    this.data.getTeams().subscribe((res: any) => {
      this.teams = res;
      this.currentView = 'teams';
    });
  }

  getPlayers() {
    this.data.getPlayers().subscribe((res: any) => {
      this.players = res;
      this.currentView = 'players';
    });
  }

  getMatches() {
    this.data.getmatches().subscribe((res: any) => {
      this.matches = res;
      this.currentView = 'matches';
    });
  }

  filtrarLol() {
    this.filteredGames = this.games.filter(
      (g) => g.class_name.toLowerCase() === 'lol'
    );
  }

  filtrarDota2() {
    this.filteredGames = this.games.filter((g) => g.class_name === 'Dota 2');
  }

  filtrarCsgo() {
    this.filteredGames = this.games.filter((g) => g.class_name === 'CS:GO');
  }

  FiltrarOtros() {
    this.filteredGames = this.games.filter((g) => g.class_name === 'Other');
  }

  addToFavorites(type: string, referenceId: number, name?: string) {
    const dto = { type, referenceId }; // ❌ no enviamos 'name'
    this.data.addFavorite(dto).subscribe({
      next: (res) => {
        console.log('Favorito guardado:', res);
        alert(`¡${name || 'Elemento'} añadido a favoritos!`);
      },
      error: (err) => {
        console.error('Error al añadir favorito', err);
        alert('Error al guardar el favorito.');
      }
    });
  }

  ngOnInit(): void {
    this.authService.refreshUser();
  }
}
