import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { DataService } from '../../../data.service';

@Component({
  selector: 'game-tournament-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DatePipe, TitleCasePipe],
  templateUrl: './game-tournament-card.component.html',
  styleUrls: ['./game-tournament-card.component.css']
})
export class GameTournamentCardComponent {
  @Input() tournaments: any[] | null = null;
  @Input() game: string = '';
  
  constructor(private data: DataService) {}

 addToFavorites(tournamentId: number) {
    const type = this.game ? `${this.game}_tournament` : 'tournament';

    this.data.addFavorite({ referenceId: tournamentId, type }).subscribe({
      next: () => console.log(`${type} añadido a favoritos`),
      error: (err) => console.error(`Error al añadir ${type} a favoritos`, err)
    });
  }
}
