import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-league-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './game-league-card.component.html',
  styleUrls: ['./game-league-card.component.scss']
})
export class GameLeagueCardComponent {
  @Input() leagues: any[] | null = null;
}
