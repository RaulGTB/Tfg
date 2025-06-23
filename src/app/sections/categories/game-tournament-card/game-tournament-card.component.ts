import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'game-tournament-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DatePipe, TitleCasePipe],
  templateUrl: './game-tournament-card.component.html',
  styleUrls: ['./game-tournament-card.component.scss']
})
export class GameTournamentCardComponent {
  @Input() tournaments: any[] | null = null;
}
