import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service'; // Ajusta la ruta según tu estructura
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Favorite {
  type: string;
  referenceId: number;
  name?: string; // Solo para mostrar en frontend, no se envía al backend
}

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css'],
   imports: [CommonModule, ReactiveFormsModule,FormsModule],
})
export class FavsComponent implements OnInit {

  favorites: Favorite[] = [];
   newFavorite: Favorite = { type: '', referenceId: 0, name: '' };

  successMsg: string = '';
  errorMsg: string = '';

  constructor(private data: DataService) {}

  ngOnInit() {
    this.loadFavorites();
  }
loadFavorites() {
  this.data.getFavorites().subscribe({
    next: (res) => {
      // res debería ser un array de favoritos del backend: itemType, itemId
      this.favorites = res.map((fav: any) => ({
        type: fav.itemType,
        referenceId: fav.itemId,
        name: `${fav.itemType} ${fav.itemId}` // Aquí podrías enriquecerlo con datos reales si quieres
      }));
    },
    error: (err) => {
      console.error('Error al cargar favoritos', err);
      this.errorMsg = 'No se pudieron cargar los favoritos.';
    }
  });
}


 addFavorite() {
  if (!this.newFavorite.type || !this.newFavorite.referenceId) {
    this.errorMsg = 'Por favor, rellena todos los campos obligatorios.';
    this.successMsg = '';
    return;
  }

  const dto = {
    type: this.newFavorite.type,
    referenceId: Number(this.newFavorite.referenceId)
  };

  this.data.addFavorite(dto).subscribe({
    next: (res) => {
      this.successMsg = 'Favorito añadido correctamente.';
      this.errorMsg = '';
      this.favorites.push({ ...dto, name: this.newFavorite.name }); // Guardamos con nombre solo para UI
      this.newFavorite = { type: '', referenceId: 0, name: '' };
    },
    error: (err) => {
      this.errorMsg = 'Error al añadir favorito.';
      this.successMsg = '';
      console.error('Error al añadir favorito', err);
    }
  });
}


}
