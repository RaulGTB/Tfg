import { Component } from '@angular/core';
import { DataService } from './../../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
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

  pageSize = 10;
  pages: { [key: string]: number } = {
    lolLeagues: 1,
    lolSeries: 1,
    lolTournaments: 1,
    lolMatches: 1,
    CSGOLeagues: 1,
    CSGOSeries: 1,
    CSGOTournaments: 1,
    CSGOMatches: 1,
    dota2Leagues: 1,
    dota2Series: 1,
    dota2Tournaments: 1,
    dota2Matches: 1,
    valorantLeagues: 1,
    valorantSeries: 1,
    valorantTournaments: 1,
    valorantMatches: 1,
  };

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

  changePage(key: string, delta: number) {
    const next = (this.pages[key] || 1) + delta;
    if (next < 1) return;
    this.pages[key] = next;
    switch (key) {
      case 'lolLeagues':
        this.getLolLeagues();
        break;
      case 'lolSeries':
        this.getLolSeries();
        break;
      case 'lolTournaments':
        this.getLolTournaments();
        break;
      case 'lolMatches':
        this.getLolMatches();
        break;
      case 'CSGOLeagues':
        this.getCSGOLeagues();
        break;
      case 'CSGOSeries':
        this.getCSGOSeries();
        break;
      case 'CSGOTournaments':
        this.getCSGOTournaments();
        break;
      case 'CSGOMatches':
        this.getCSGOMatches();
        break;
      case 'dota2Leagues':
        this.getDota2Leagues();
        break;
      case 'dota2Series':
        this.getDota2Series();
        break;
      case 'dota2Tournaments':
        this.getDota2Tournaments();
        break;
      case 'dota2Matches':
        this.getDota2Matches();
        break;
      case 'valorantLeagues':
        this.getValorantLeagues();
        break;
      case 'valorantSeries':
        this.getValorantSeries();
        break;
      case 'valorantTournaments':
        this.getValorantTournaments();
        break;
      case 'valorantMatches':
        this.getValorantMatches();
        break;
    }
  }

  // LoL

  getLolLeagues() {
    this.data.getLolLeagues(this.pages.lolLeagues, this.pageSize).subscribe((res: any) => {
      this.lolLeagues = res;

      console.log(this.lolLeagues);
    });
  }

  getLolSeries() {
    this.data.getLolSeries(this.pages.lolSeries, this.pageSize).subscribe((res: any) => {
      this.lolSeries = res;

      console.log(this.lolSeries);
    });
  }

  getLolTournaments() {
    this.data.getLolTournaments(this.pages.lolTournaments, this.pageSize).subscribe((res: any) => {
      this.lolTournaments = res;

      console.log(this.lolTournaments);
    });
  }

  getLolMatches() {
    this.data.getLolMatches(this.pages.lolMatches, this.pageSize).subscribe((res: any) => {
      this.lolMatches = res;

      console.log(this.lolMatches);
    });
  }

  // CSGO

  getCSGOLeagues() {
    this.data.getCSGOLeagues(this.pages.CSGOLeagues, this.pageSize).subscribe((res: any) => {
      this.CSGOLeagues = res;

      console.log(this.CSGOLeagues);
    });
  }

  getCSGOSeries() {
    this.data.getCSGOSeries(this.pages.CSGOSeries, this.pageSize).subscribe((res: any) => {
      this.CSGOSeries = res;

      console.log(this.CSGOSeries);
    });
  }

  getCSGOTournaments() {
    this.data.getCSGOTournaments(this.pages.CSGOTournaments, this.pageSize).subscribe((res: any) => {
      this.CSGOTournaments = res;

      console.log(this.CSGOTournaments);
    });
  }

  getCSGOMatches() {
    this.data.getCSGOMatches(this.pages.CSGOMatches, this.pageSize).subscribe((res: any) => {
      this.CSGOMatches = res;

      console.log(this.CSGOMatches);
    });
  }

  // Dota 2

  getDota2Leagues() {
    this.data.getDota2Leagues(this.pages.dota2Leagues, this.pageSize).subscribe((res: any) => {
      this.dota2Leagues = res;

      console.log(this.dota2Leagues);
    });
  }

  getDota2Series() {
    this.data.getDota2Series(this.pages.dota2Series, this.pageSize).subscribe((res: any) => {
      this.dota2Series = res;

      console.log(this.dota2Series);
    });
  }

  getDota2Tournaments() {
    this.data.getDota2Tournaments(this.pages.dota2Tournaments, this.pageSize).subscribe((res: any) => {
      this.dota2Tournaments = res;

      console.log(this.dota2Tournaments);
    });
  }

  getDota2Matches() {
    this.data.getDota2Matches(this.pages.dota2Matches, this.pageSize).subscribe((res: any) => {
      this.dota2Matches = res;

      console.log(this.dota2Matches);
    });
  }

  // Valorant

  getValorantLeagues() {
    this.data.getValorantLeagues(this.pages.valorantLeagues, this.pageSize).subscribe((res: any) => {
      this.valorantLeagues = res;

      console.log(this.valorantLeagues);
    });
  }

  getValorantSeries() {
    this.data.getValorantSeries(this.pages.valorantSeries, this.pageSize).subscribe((res: any) => {
      this.valorantSeries = res;

      console.log(this.valorantSeries);
    });
  }

  getValorantTournaments() {
    this.data.getValorantTournaments(this.pages.valorantTournaments, this.pageSize).subscribe((res: any) => {
      this.valorantTournaments = res;

      console.log(this.valorantTournaments);
    });
  }

  getValorantMatches() {
    this.data.getValorantMatches(this.pages.valorantMatches, this.pageSize).subscribe((res: any) => {
      this.valorantMatches = res;

      console.log(this.valorantMatches);
    });
  }

  formatSlug(slug: string): string {
    return slug ? slug.replace(/-/g, ' ').toUpperCase() : 'N/A';
  }
}
