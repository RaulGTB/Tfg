import { Component } from '@angular/core';
import { DataService } from './../../data.service';
import { CommonModule } from '@angular/common';
import { GameLeagueCardComponent } from './game-league-card/game-league-card.component';
import { GameSeriesCardComponent } from './game-series-card/game-series-card.component';
import { GameTournamentCardComponent } from './game-tournament-card/game-tournament-card.component';
import { GameMatchCardComponent } from './game-match-card/game-match-card.component';
import { PaginatorComponent } from "../../shared/paginator/paginator.component";

@Component({
  selector: 'app-categories',
  imports: [
    CommonModule,
    GameLeagueCardComponent,
    GameSeriesCardComponent,
    GameTournamentCardComponent,
    GameMatchCardComponent,
    PaginatorComponent
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

  //Paginacion 
  itemsPerPage = 6;

  lolPageMap: Record<string, number> = {
    leagues: 1,
    series: 1,
    tournaments: 1,
    matches: 1
  };
  csgoPageMap: Record<string, number> = {
    leagues: 1,
    series: 1,
    tournaments: 1,
    matches: 1
  };
  dota2PageMap: Record<string, number> = {
    leagues: 1,
    series: 1,
    tournaments: 1,
    matches: 1
  };
  valorantPageMap: Record<string, number> = {
    leagues: 1,
    series: 1,
    tournaments: 1,
    matches: 1
  };

  // para acceder a los arrays originales
  lolItemsMap: Record<string, any[]> = {
    leagues: this.lolLeagues,
    series: this.lolSeries,
    tournaments: this.lolTournaments,
    matches: this.lolMatches
  };

  csgoItemsMap: Record<string, any[]> = {
    leagues: this.CSGOLeagues,
    series: this.CSGOSeries,
    tournaments: this.CSGOTournaments,
    matches: this.CSGOMatches
  };

  dota2ItemsMap: Record<string, any[]> = {
    leagues: this.dota2Leagues,
    series: this.dota2Series,
    tournaments: this.dota2Tournaments,
    matches: this.dota2Matches
  };

  valorantItemsMap: Record<string, any[]> = {
    leagues: this.valorantLeagues,
    series: this.valorantSeries,
    tournaments: this.valorantTournaments,
    matches: this.valorantMatches
  };


  //lol
  get paginatedLoLLeagues() {
    const start = (this.lolPageMap['leagues'] - 1) * this.itemsPerPage;
    return this.lolLeagues.slice(start, start + this.itemsPerPage);
  }
  get paginatedLoLSeries() {
    const start = (this.lolPageMap['series'] - 1) * this.itemsPerPage;
    return this.lolSeries.slice(start, start + this.itemsPerPage);
  }

  get paginatedLoLTournaments() {
    const start = (this.lolPageMap['tournaments'] - 1) * this.itemsPerPage;
    return this.lolTournaments.slice(start, start + this.itemsPerPage);
  }

  get paginatedLoLMatches() {
    const start = (this.lolPageMap['matches'] - 1) * this.itemsPerPage;
    return this.lolMatches.slice(start, start + this.itemsPerPage);
  }
  // crea también paginatedLoLSeries, etc.

  lolChangePage(type: string, page: number) {
    this.lolPageMap[type] = page;
  }

  // CSGO
  get paginatedCSGOLeagues() {
    const start = (this.csgoPageMap['leagues'] - 1) * this.itemsPerPage;
    return this.CSGOLeagues.slice(start, start + this.itemsPerPage);
  }
  get paginatedCSGOSeries() {
    const start = (this.csgoPageMap['series'] - 1) * this.itemsPerPage;
    return this.CSGOSeries.slice(start, start + this.itemsPerPage);
  }
  get paginatedCSGOTournaments() {
    const start = (this.csgoPageMap['tournaments'] - 1) * this.itemsPerPage;
    return this.CSGOTournaments.slice(start, start + this.itemsPerPage);
  }
  get paginatedCSGOMatches() {
    const start = (this.csgoPageMap['matches'] - 1) * this.itemsPerPage;
    return this.CSGOMatches.slice(start, start + this.itemsPerPage);
  }
  csgoChangePage(type: string, page: number) {
    this.csgoPageMap[type] = page;
  }

  // Dota 2
  get paginatedDota2Leagues() {
    const start = (this.dota2PageMap['leagues'] - 1) * this.itemsPerPage;
    return this.dota2Leagues.slice(start, start + this.itemsPerPage);
  }
  get paginatedDota2Series() {
    const start = (this.dota2PageMap['series'] - 1) * this.itemsPerPage;
    return this.dota2Series.slice(start, start + this.itemsPerPage);
  }
  get paginatedDota2Tournaments() {
    const start = (this.dota2PageMap['tournaments'] - 1) * this.itemsPerPage;
    return this.dota2Tournaments.slice(start, start + this.itemsPerPage);
  }
  get paginatedDota2Matches() {
    const start = (this.dota2PageMap['matches'] - 1) * this.itemsPerPage;
    return this.dota2Matches.slice(start, start + this.itemsPerPage);
  }
  dota2ChangePage(type: string, page: number) {
    this.dota2PageMap[type] = page;
  }

  // Valorant
  get paginatedValorantLeagues() {
    const start = (this.valorantPageMap['leagues'] - 1) * this.itemsPerPage;
    return this.valorantLeagues.slice(start, start + this.itemsPerPage);
  }
  get paginatedValorantSeries() {
    const start = (this.valorantPageMap['series'] - 1) * this.itemsPerPage;
    return this.valorantSeries.slice(start, start + this.itemsPerPage);
  }
  get paginatedValorantTournaments() {
    const start = (this.valorantPageMap['tournaments'] - 1) * this.itemsPerPage;
    return this.valorantTournaments.slice(start, start + this.itemsPerPage);
  }
  get paginatedValorantMatches() {
    const start = (this.valorantPageMap['matches'] - 1) * this.itemsPerPage;
    return this.valorantMatches.slice(start, start + this.itemsPerPage);
  }
  valorantChangePage(type: string, page: number) {
    this.valorantPageMap[type] = page;
  }


}
