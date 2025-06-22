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
  vabilities : any[] = [];
  vmaps : any[] = [];
  vweapons : any[] = [];
  vagents : any[] = [];

  pageSize = 10;
  pages: { [key: string]: number } = {
    maps: 1,
    weapons: 1,
    abilities: 1,
    heroes: 1,
    items: 1,
    lolchamps: 1,
    lolitems: 1,
    lolrunes: 1,
    lolspells: 1,
    vabilities: 1,
    vmaps: 1,
    vweapons: 1,
    vagents: 1
  };

  constructor(private data: DataService) {
    this.getCSGOmaps();
    this.getCSGOweapons();
  }

  changePage(key: string, delta: number) {
    const next = (this.pages[key] || 1) + delta;
    if (next < 1) return;
    this.pages[key] = next;
    switch (key) {
      case 'maps':
        this.getCSGOmaps();
        break;
      case 'weapons':
        this.getCSGOweapons();
        break;
      case 'abilities':
        this.getDota2Abilities();
        break;
      case 'heroes':
        this.getDota2heroes();
        break;
      case 'items':
        this.getDota2items();
        break;
      case 'lolchamps':
        this.getLolChampions();
        break;
      case 'lolitems':
        this.getLolItemns();
        break;
      case 'lolrunes':
        this.getLolrunes();
        break;
      case 'lolspells':
        this.getLolspells();
        break;
      case 'vabilities':
        this.getValoranabilities();
        break;
      case 'vmaps':
        this.getValorantmaps();
        break;
      case 'vweapons':
        this.getValorantweapons();
        break;
      case 'vagents':
        this.getValorantagents();
        break;
    }
  }
  getCSGOmaps() {
    this.data.getCSGOmaps(this.pages.maps, this.pageSize).subscribe((res: any) => {
      this.maps = res;
      this.currentView = 'maps';
    });
  }

  getCSGOweapons() {
    this.data.getCSGOweapons(this.pages.weapons, this.pageSize).subscribe((res: any) => {
      this.weapons = res;
      this.currentView = 'weapons';
    });
  }

  getDota2Abilities(){
    this.data.getDota2Abilities(this.pages.abilities, this.pageSize).subscribe((res: any) => {
      this.dotaAbilities = res;
      this.currentView = 'abilities';
    });
  }
  getDota2heroes(){
    this.data.getDota2heroes(this.pages.heroes, this.pageSize).subscribe((res: any) => {
      this.dotaheores = res;
      this.currentView = 'heroes';
    });
  }
  getDota2items(){
    this.data.getDota2items(this.pages.items, this.pageSize).subscribe((res: any) => {
      this.dotaItems = res;
      this.currentView = 'items';
    });
  }
  getLolChampions(){
    this.data.getLolChampions(this.pages.lolchamps, this.pageSize).subscribe((res: any) => {
      this.lolchamps = res;
      this.currentView = 'lolchamps';
    });
  }
  getLolItemns(){
    this.data.getLolItemns(this.pages.lolitems, this.pageSize).subscribe((res: any) => {
      this.lolitems = res;
      this.currentView = 'lolitems';
    });
  }
  getLolrunes(){
    this.data.getLolrunes(this.pages.lolrunes, this.pageSize).subscribe((res: any) => {
      this.lolrunes = res;
      this.currentView = 'lolrunes';
    });
  }
  getLolspells(){
    this.data.getLolspells(this.pages.lolspells, this.pageSize).subscribe((res: any) => {
      this.lolspells = res;
      this.currentView = 'lolspells';
    });
  }
  getValoranabilities(){
    this.data.getValoranabilities(this.pages.vabilities, this.pageSize).subscribe((res: any) => {
      this.vabilities = res;
      this.currentView = 'vabilities';
    });

  }
   getValorantmaps(){
    this.data.getValorantmaps(this.pages.vmaps, this.pageSize).subscribe((res: any) => {
      this.vmaps = res;
      this.currentView = 'vmaps';
    });

  }

   getValorantweapons(){
    this.data.getValorantweapons(this.pages.vweapons, this.pageSize).subscribe((res: any) => {
      this.vweapons = res;
      this.currentView = 'vweapons';
    });

  }
   getValorantagents(){
    this.data.getValorantagents(this.pages.vagents, this.pageSize).subscribe((res: any) => {
      this.vagents = res;
      this.currentView = 'vagents';
    });

  }





}
