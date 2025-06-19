import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // General methods

  getLeagues() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/leagues')
  }

  getTeams() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/teams')
  }

  getPlayers() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/players')
  }

  getmatches() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/matches')
  }

  // Game-specific methods

  // League of Legends

  getLolLeagues() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/lol/leagues')
  }

  getLolSeries() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/lol/series')
  }

  getLolTournaments() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/lol/tournaments')
  }

  getLolMatches() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/lol/matches')
}

  getLolChampions() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/lol/champions')

  }
  getLolItemns() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/lol/items')

  }
  getLolrunes() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/lol/runes-reforged')

  }
  getLolspells() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/lol/spells')

  }




  // Counter-Strike: Global Offensive

  getCSGOLeagues() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/csgo/leagues')
  }

  getCSGOSeries() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/csgo/series')
  }

  getCSGOTournaments() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/csgo/tournaments')
  }

  getCSGOMatches() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/csgo/matches')
  }

  getCSGOmaps() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/csgo/maps')

  }
  getCSGOweapons() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/csgo/weapons')
  }

  // Dota 2

  getDota2Leagues() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/dota2/leagues')
  }

  getDota2Series() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/dota2/series')
  }

  getDota2Tournaments() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/dota2/tournaments')
  }

  getDota2Matches() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/dota2/matches')
  }

  getDota2Abilities() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/dota2/abilities')
  }
  getDota2heroes() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/dota2/heroes')
  }
  getDota2items() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/dota2/items')
  }



  // Valorant

  getValorantLeagues() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/valorant/leagues')
  }

  getValorantSeries() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/valorant/series')
  }

  getValorantTournaments() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/valorant/tournaments')
  }

  getValorantMatches() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/valorant/matches')
  }
  getValoranabilities() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/valorant/abilities')
  }
  getValorantmaps() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/valorant/maps')
  }
  getValorantweapons() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/valorant/weapons')
  }
  getValorantagents() {
    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/pandascore/valorant/agents')
  }





  // data.service.ts
  addFavorite(favorite: { type: string; referenceId: number }): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError(() => new Error('No token found'));
    }

    const body = {
      itemType: favorite.type,
      itemId: favorite.referenceId
    };

    return this.http.post('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/favorites', body, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }
  getFavorites(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError(() => new Error('No token found'));
    }

    return this.http.get('https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/favorites', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }

  removeFavorite(favoriteId: number): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) return throwError(() => new Error('No token found'));

    return this.http.delete(
      `https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/favorites/${favoriteId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
  deleteAllFavorites(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError(() => new Error('No token found'));
    }

    const headers = { Authorization: `Bearer ${token}` };

    return this.http.delete(
      'https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/favorites/all',
      { headers }
    );
  }






  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log("TOKEN ACTUAL:", token);
  }

}
