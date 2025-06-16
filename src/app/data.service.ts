import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getLeagues() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/leagues')
  }

  getTeams() {
    return this.http.get('https://api.pandascore.co/teams?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getPlayers() {
    return this.http.get('https://api.pandascore.co/players?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getmatches() {
    return this.http.get('https://api.pandascore.co/matches?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getLolMatches() {
    return this.http.get('https://api.pandascore.co/lol/matches?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getCSGOMatches() {
    return this.http.get('https://api.pandascore.co/csgo/matches?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getDota2Matches() {
    return this.http.get('https://api.pandascore.co/dota2/matches?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }
}
