import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


interface FavoriteResponse {
  favoriteId: number;            // nuevo campo
  itemType: string;
  itemId: number;
  itemData?: any; // JSON completo desde PandaScore
}

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class FavsComponent implements OnInit {

  groupedFavorites: { [key: string]: FavoriteResponse[] } = {};
  successMsg: string = '';
  errorMsg: string = '';

  // Para usar Object.keys en el HTML
  objectKeys = Object.keys;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.data.getFavorites().subscribe({
      next: (res: any[]) => {
        this.groupedFavorites = {};
        res.forEach(f => {
          const fav: FavoriteResponse = {
            favoriteId: f.favoriteId,
            itemType: f.itemType,
            itemId: f.itemId,
            itemData: f.itemData
          };
          const group = fav.itemType.toLowerCase();
          if (!this.groupedFavorites[group]) this.groupedFavorites[group] = [];
          this.groupedFavorites[group].push(fav);
        });
        this.successMsg = '';
        this.errorMsg = '';
      },
      error: (err) => {
        console.error('Error loading favorites.', err);
        this.errorMsg = 'Favorites could not be loaded.';
      }
    });
  }

  getOpponentsNames(opponents: any[]): string {
    if (!opponents || opponents.length === 0) return 'TBD';
    return opponents.map(o => o.opponent?.name).filter(Boolean).join(' vs ');
  }


  removeFavorite(id: number) {
    this.data.removeFavorite(id).subscribe({
      next: () => this.loadFavorites(),
      error: () => console.error('The favorite could not be deleted.')
    });
  }



  deleteAllFavorites() {
    this.data.deleteAllFavorites().subscribe({
      next: () => this.loadFavorites(),
      error: () => console.error('Favorites could not be deleted.')
    });
  }



  hasFavorites(): boolean {
    return Object.values(this.groupedFavorites).some(arr => arr.length > 0);
  }


}
