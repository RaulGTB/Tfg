import { CommonModule } from '@angular/common';
import { DataService } from './../../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private data: DataService) {
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
  currentView: string = 'teams'; // Default view

  getDpts() {
    this.data.getLeagues().subscribe((res: any) => {
      this.games = res;
      this.filteredGames = this.games;

      console.log(this.games);
    });
  }

  getTeams() {
    this.data.getTeams().subscribe((res: any) => {
      this.teams = res;

      this.currentView = 'teams'; // Set default view to teams
      console.log(res);
    });
  }

  getPlayers() {
    this.data.getPlayers().subscribe((res: any) => {
      this.players = res;

      this.currentView = 'players'; // Set default view to players
      console.log(res);
    });
  }

  getMatches() {
    this.data.getmatches().subscribe((res: any) => {
      this.matches = res;

      this.currentView = 'matches'; // Set default view to matches
      console.log(res);
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
}
