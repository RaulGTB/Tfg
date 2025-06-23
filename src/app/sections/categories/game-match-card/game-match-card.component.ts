import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';

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
}
