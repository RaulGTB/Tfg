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
    this.getLolMatches();
    this.getCSGOLeagues();
    this.getCSGOMatches();
    this.getDota2Leagues();
    this.getDota2Matches();
  }

  currentViewLoL: string = '';
  currentViewCSGO: string = '';
  currentViewDota2: string = '';

  lolLeagues: any[] = [];
  lolMatches: any[] = [];

  CSGOLeagues: any[] = [];
  CSGOMatches: any[] = [];

  dota2Leagues: any[] = [];
  dota2Matches: any[] = [];

  // LoL

  getLolLeagues() {
    this.data.getLolLeagues().subscribe((res: any) => {
      this.lolLeagues = res;

      console.log(this.lolLeagues);
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

  getDota2Matches() {
    this.data.getDota2Matches().subscribe((res: any) => {
      this.dota2Matches = res;

      console.log(this.dota2Matches);
    });
  }

   formatSlug(slug: string): string {
    return slug ? slug.replace(/-/g, ' ').toUpperCase() : 'N/A';
  }
}
