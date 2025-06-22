import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl = 'https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  private getPaginated<T>(path: string, page: number = 1, limit: number = 10): Observable<T> {
    const params = new HttpParams().set('page', page).set('limit', limit);
    return this.http.get<T>(`${this.baseUrl}/${path}`, { params });
  }

  // General methods

  getLeagues(page: number = 1, limit: number = 10) {
    return this.getPaginated('leagues', page, limit);
  }

  getTeams(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/teams', page, limit);
  }

  getPlayers(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/players', page, limit);
  }

  getmatches(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/matches', page, limit);
  }

  // Game-specific methods

  // League of Legends

  getLolLeagues(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/lol/leagues', page, limit)
  }

  getLolSeries(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/lol/series', page, limit)
  }

  getLolTournaments(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/lol/tournaments', page, limit)
  }

  getLolMatches(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/lol/matches', page, limit)
}

  getLolChampions(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/lol/champions', page, limit)

  }
  getLolItemns(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/lol/items', page, limit)

  }
  getLolrunes(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/lol/runes-reforged', page, limit)

  }
  getLolspells(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/lol/spells', page, limit)

  }




  // Counter-Strike: Global Offensive

  getCSGOLeagues(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/csgo/leagues', page, limit)
  }

  getCSGOSeries(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/csgo/series', page, limit)
  }

  getCSGOTournaments(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/csgo/tournaments', page, limit)
  }

  getCSGOMatches(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/csgo/matches', page, limit)
  }

  getCSGOmaps(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/csgo/maps', page, limit)

  }
  getCSGOweapons(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/csgo/weapons', page, limit)
  }

  // Dota 2

  getDota2Leagues(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/dota2/leagues', page, limit)
  }

  getDota2Series(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/dota2/series', page, limit)
  }

  getDota2Tournaments(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/dota2/tournaments', page, limit)
  }

  getDota2Matches(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/dota2/matches', page, limit)
  }

  getDota2Abilities(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/dota2/abilities', page, limit)
  }
  getDota2heroes(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/dota2/heroes', page, limit)
  }
  getDota2items(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/dota2/items', page, limit)
  }



  // Valorant

  getValorantLeagues(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/valorant/leagues', page, limit)
  }

  getValorantSeries(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/valorant/series', page, limit)
  }

  getValorantTournaments(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/valorant/tournaments', page, limit)
  }

  getValorantMatches(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/valorant/matches', page, limit)
  }
  getValoranabilities(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/valorant/abilities', page, limit)
  }
  getValorantmaps(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/valorant/maps', page, limit)
  }
  getValorantweapons(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/valorant/weapons', page, limit)
  }
  getValorantagents(page: number = 1, limit: number = 10) {
    return this.getPaginated('pandascore/valorant/agents', page, limit)
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
      'https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/favorites',
      { headers }
    );
  }






  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log("TOKEN ACTUAL:", token);
  }

}
