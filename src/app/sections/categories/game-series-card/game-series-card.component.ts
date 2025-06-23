import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'game-series-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DatePipe],
  templateUrl: './game-series-card.component.html',
  styleUrls: ['./game-series-card.component.scss']
})
export class GameSeriesCardComponent {
  @Input() series: any[] | null = null;
}
