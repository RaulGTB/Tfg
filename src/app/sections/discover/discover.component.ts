import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discover',
  imports: [CommonModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {

  selectedGame: string = '';
  selectedSection: string = ''; 

}
