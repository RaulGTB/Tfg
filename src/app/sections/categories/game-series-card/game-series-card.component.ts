import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataService } from '../../../data.service';

@Component({
  selector: 'game-series-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DatePipe],
  templateUrl: './game-series-card.component.html',
  styleUrls: ['./game-series-card.component.css']
})
export class GameSeriesCardComponent {
  @Input() series: any[] | null = null;

  addedFavorites: Set<number> = new Set();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getFavorites().subscribe({
      next: (favorites) => {
        favorites
          .favorites
          .filter((fav: any) => fav.itemType === 'series')
          .forEach((fav: any) => this.addedFavorites.add(fav.referenceId || fav.itemId));

      },
      error: (err) => console.error('Error al cargar favoritos', err)
    });
  }

  addToFavorites(seriesId: number) {
    if (this.addedFavorites.has(seriesId)) return;

    this.data.addFavorite({ referenceId: seriesId, type: 'series' }).subscribe({
      next: () => this.addedFavorites.add(seriesId),
      error: (err) => console.error('Error al añadir serie', err)
    });
  }
}
