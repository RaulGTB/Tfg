import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-discover',
  imports: [CommonModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {

  selectedGame: string = '';
  selectedSection: string = '';
  currentView: string = '';
  weapons: any[] = [];
  maps: any[] = [];
  dotaAbilities: any[] = [];
  dotaheores: any[] = [];
  dotaItems: any[] = [];
  lolitems: any[] = [];
  lolspells: any[] = [];
  lolrunes: any[] = [];
  lolchamps: any[] = [];

  constructor(private data: DataService) {
    this.getCSGOmaps();
    this.getCSGOweapons();
  }
  getCSGOmaps() {
    this.data.getCSGOmaps().subscribe((res: any) => {
      this.maps = res;
      this.currentView = 'maps';
    });
  }

  getCSGOweapons() {
    this.data.getCSGOweapons().subscribe((res: any) => {
      this.weapons = res;
      this.currentView = 'weapons';
    });
  }

  getDota2Abilities(){
    this.data.getDota2Abilities().subscribe((res: any) => {
      this.dotaAbilities = res;
      this.currentView = 'abilities';
    });
  }
  getDota2heroes(){
    this.data.getDota2heroes().subscribe((res: any) => {
      this.dotaheores = res;
      this.currentView = 'heroes';
    });
  }
  getDota2items(){
    this.data.getDota2items().subscribe((res: any) => {
      this.dotaItems = res;
      this.currentView = 'items';
    });
  }
  getLolChampions(){
    this.data.getLolChampions().subscribe((res: any) => {
      this.lolchamps = res;
      this.currentView = 'lolchamps';
    });
  }
  getLolItemns(){
    this.data.getLolItemns().subscribe((res: any) => {
      this.lolitems = res;
      this.currentView = 'lolitems';
    });
  }
  getLolrunes(){
    this.data.getLolrunes().subscribe((res: any) => {
      this.lolrunes = res;
      this.currentView = 'lolrunes';
    });
  }
  getLolspells(){
    this.data.getLolspells().subscribe((res: any) => {
      this.lolspells = res;
      this.currentView = 'lolspells';
    });
  }




}
