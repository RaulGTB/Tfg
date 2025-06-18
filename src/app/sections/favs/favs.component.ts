import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


interface FavoriteResponse {
  id: number; // identificador único en la BD
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

  constructor(private data: DataService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.data.getFavorites().subscribe({
      next: (res: any[]) => {
        console.log('Favoritos desde el backend:', res);
        this.groupedFavorites = {};

        res.forEach(fav => {
          const mapped: FavoriteResponse = {
            id: fav.id,
            itemType: fav.itemType,
            itemId: fav.itemId,
            itemData: fav.itemData,
          };
          const group = mapped.itemType.toLowerCase();
          if (!this.groupedFavorites[group]) {
            this.groupedFavorites[group] = [];
          }
          this.groupedFavorites[group].push(mapped);
        });

        this.successMsg = '';
        this.errorMsg = '';
      },
      error: (err) => {
        console.error('Error al cargar favoritos', err);
        this.errorMsg = 'No se pudieron cargar los favoritos.';
      }
    });
  }

  getOpponentsNames(opponents: any[]): string {
    if (!opponents || opponents.length === 0) return 'TBD';
    return opponents.map(o => o.opponent?.name).filter(Boolean).join(' vs ');
  }

  removeFavorite(favId: number, type: string) {
    this.data.removeFavorite(favId).subscribe({
      next: () => {
        this.groupedFavorites[type] = this.groupedFavorites[type].filter(f => f.id !== favId);
        if (this.groupedFavorites[type].length === 0) {
          delete this.groupedFavorites[type];
        }
        this.successMsg = 'Favorito eliminado correctamente.';
        this.errorMsg = '';
      },
      error: err => {
        console.error('Error al eliminar favorito', err);
        this.errorMsg = 'Error al eliminar el favorito.';
        this.successMsg = '';
      }
    });
  }

  clearFavorites() {
    this.data.deleteAllFavorites().subscribe({
      next: () => {
        this.groupedFavorites = {};
        this.successMsg = 'Todos los favoritos fueron eliminados.';
        this.errorMsg = '';
      },
      error: err => {
        console.error('Error al eliminar todos los favoritos', err);
        this.errorMsg = 'Error al eliminar todos los favoritos.';
        this.successMsg = '';
      }
    });
  }

}
