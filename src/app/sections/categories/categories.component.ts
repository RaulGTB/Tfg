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
    this.getLolMatches();
    this.getCSGOMatches();
    this.getDota2Matches();
  }

  currentViewLoL: string = '';
  currentViewCSGO: string = '';
  currentViewDota2: string = '';
  lolMatches: any[] = [];
  CSGOMatches: any[] = [];
  dota2Matches: any[] = [];

  getLolMatches() {
    this.data.getLolMatches().subscribe((res: any) => {
      this.lolMatches = res;

      console.log(this.lolMatches);
    });
  }

  getCSGOMatches() {
    this.data.getCSGOMatches().subscribe((res: any) => {
      this.CSGOMatches = res;

      console.log(this.CSGOMatches);
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
