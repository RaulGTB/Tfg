import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../data.service';

@Component({
  selector: 'game-league-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './game-league-card.component.html',
  styleUrls: ['./game-league-card.component.css']
})
export class GameLeagueCardComponent {
  @Input() leagues: any[] | null = null;
  addedFavorites: Set<number> = new Set();

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getFavorites().subscribe({
      next: (favorites) => {
        favorites
          .filter((fav: any) => fav.itemType === 'league')
          .forEach((fav: any) => this.addedFavorites.add(fav.referenceId || fav.itemId));
      },
      error: (err) => console.error('Error cargando favoritos', err)
    });
  }

  addToFavorites(leagueId: number) {
    if (this.addedFavorites.has(leagueId)) return;

    this.data.addFavorite({ referenceId: leagueId, type: 'league' }).subscribe({
      next: () => {
        console.log('Liga añadida a favoritos');
        this.addedFavorites.add(leagueId);
      },
      error: (err) => console.error('Error al añadir liga a favoritos', err)
    });
  }

}
