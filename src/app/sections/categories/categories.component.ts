import { Component } from '@angular/core';
import { DataService } from './../../data.service';
import { CommonModule } from '@angular/common';
import { GameLeagueCardComponent } from './game-league-card/game-league-card.component';
import { GameSeriesCardComponent } from './game-series-card/game-series-card.component';
import { GameTournamentCardComponent } from './game-tournament-card/game-tournament-card.component';
import { GameMatchCardComponent } from './game-match-card/game-match-card.component';

@Component({
  selector: 'app-categories',
  imports: [
    CommonModule,
    GameLeagueCardComponent,
    GameSeriesCardComponent,
    GameTournamentCardComponent,
    GameMatchCardComponent
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  constructor(private data: DataService) {
    this.getLolLeagues();
    this.getLolSeries();
    this.getLolTournaments();
    this.getLolMatches();
    this.getCSGOLeagues();
    this.getCSGOSeries();
    this.getCSGOTournaments();
    this.getCSGOMatches();
    this.getDota2Leagues();
    this.getDota2Series();
    this.getDota2Tournaments();
    this.getDota2Matches();
    this.getValorantLeagues();
    this.getValorantSeries();
    this.getValorantTournaments();
    this.getValorantMatches();
  }

  currentViewLoL: string = '';
  currentViewCSGO: string = '';
  currentViewDota2: string = '';
  currentViewValorant: string = '';

  lolLeagues: any[] = [];
  lolMatches: any[] = [];
  lolSeries: any[] = [];
  lolTournaments: any[] = [];

  CSGOLeagues: any[] = [];
  CSGOMatches: any[] = [];
  CSGOSeries: any[] = [];
  CSGOTournaments: any[] = [];

  dota2Leagues: any[] = [];
  dota2Matches: any[] = [];
  dota2Series: any[] = [];
  dota2Tournaments: any[] = [];

  valorantLeagues: any[] = [];
  valorantSeries: any[] = [];
  valorantTournaments: any[] = [];
  valorantMatches: any[] = [];    

  // LoL

  getLolLeagues() {
    this.data.getLolLeagues().subscribe((res: any) => {
      this.lolLeagues = res;

      console.log(this.lolLeagues);
    });
  }

  getLolSeries() {
    this.data.getLolSeries().subscribe((res: any) => {
      this.lolSeries = res;

      console.log(this.lolSeries);
    });
  }

  getLolTournaments() {
    this.data.getLolTournaments().subscribe((res: any) => {
      this.lolTournaments = res;

      console.log(this.lolTournaments);
    });
  }

  getLolMatches() {
    this.data.getLolMatches().subscribe((res: any) => {
      this.lolMatches = res;

      console.log(this.lolMatches);
    });
  }

  // CSGO

  getCSGOLeagues() {
    this.data.getCSGOLeagues().subscribe((res: any) => {
      this.CSGOLeagues = res;

      console.log(this.CSGOLeagues);
    });
  }

  getCSGOSeries() {
    this.data.getCSGOSeries().subscribe((res: any) => {
      this.CSGOSeries = res;

      console.log(this.CSGOSeries);
    });
  }

  getCSGOTournaments() {
    this.data.getCSGOTournaments().subscribe((res: any) => {
      this.CSGOTournaments = res;

      console.log(this.CSGOTournaments);
    });
  }

  getCSGOMatches() {
    this.data.getCSGOMatches().subscribe((res: any) => {
      this.CSGOMatches = res;

      console.log(this.CSGOMatches);
    });
  }

  // Dota 2

  getDota2Leagues() {
    this.data.getDota2Leagues().subscribe((res: any) => {
      this.dota2Leagues = res;

      console.log(this.dota2Leagues);
    });
  }

  getDota2Series() {
    this.data.getDota2Series().subscribe((res: any) => {
      this.dota2Series = res;

      console.log(this.dota2Series);
    });
  }

  getDota2Tournaments() {
    this.data.getDota2Tournaments().subscribe((res: any) => {
      this.dota2Tournaments = res;

      console.log(this.dota2Tournaments);
    });
  }

  getDota2Matches() {
    this.data.getDota2Matches().subscribe((res: any) => {
      this.dota2Matches = res;

      console.log(this.dota2Matches);
    });
  }

  // Valorant

  getValorantLeagues() {
    this.data.getValorantLeagues().subscribe((res: any) => {
      this.valorantLeagues = res;

      console.log(this.valorantLeagues);
    });
  }

  getValorantSeries() {
    this.data.getValorantSeries().subscribe((res: any) => {
      this.valorantSeries = res;

      console.log(this.valorantSeries);
    });
  }

  getValorantTournaments() {
    this.data.getValorantTournaments().subscribe((res: any) => {
      this.valorantTournaments = res;

      console.log(this.valorantTournaments);
    });
  }

  getValorantMatches() {
    this.data.getValorantMatches().subscribe((res: any) => {
      this.valorantMatches = res;

      console.log(this.valorantMatches);
    });
  }

  formatSlug(slug: string): string {
    return slug ? slug.replace(/-/g, ' ').toUpperCase() : 'N/A';
  }
}
