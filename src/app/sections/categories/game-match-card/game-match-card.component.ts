import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { DataService } from '../../../data.service';

@Component({
  selector: 'game-match-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DatePipe, TitleCasePipe],
  templateUrl: './game-match-card.component.html',
  styleUrls: ['./game-match-card.component.css']
})
export class GameMatchCardComponent {
  @Input() matches: any[] | null = null;

  addedFavorites: Set<number> = new Set();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getFavorites().subscribe({
      next: (favorites) => {
        favorites
          .filter((fav: any) => fav.itemType === 'match')
          .forEach((fav: any) => this.addedFavorites.add(fav.referenceId || fav.itemId));
      },
      error: (err) => console.error('Error al cargar favoritos', err)
    });
  }

  addToFavorites(matchId: number) {
    if (this.addedFavorites.has(matchId)) return;

    this.data.addFavorite({ referenceId: matchId, type: 'match' }).subscribe({
      next: () => this.addedFavorites.add(matchId),
      error: (err) => console.error('Error al añadir match', err)
    });
  }
}
