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
    return this.http.get('https://api.pandascore.co/teams?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getPlayers() {
    return this.http.get('https://api.pandascore.co/players?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getmatches() {
    return this.http.get('https://api.pandascore.co/matches?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  // Game-specific methods

    // League of Legends

  getLolLeagues() {
    return this.http.get('https://api.pandascore.co/lol/leagues?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getLolSeries() {
    return this.http.get('https://api.pandascore.co/lol/series?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getLolTournaments() {
    return this.http.get('https://api.pandascore.co/lol/tournaments?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getLolMatches() {
    return this.http.get('https://api.pandascore.co/lol/matches?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

    // Counter-Strike: Global Offensive

  getCSGOLeagues() {
    return this.http.get('https://api.pandascore.co/csgo/leagues?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getCSGOSeries() {
    return this.http.get('https://api.pandascore.co/csgo/series?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getCSGOTournaments() {
    return this.http.get('https://api.pandascore.co/csgo/tournaments?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getCSGOMatches() {
    return this.http.get('https://api.pandascore.co/csgo/matches?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

    // Dota 2

  getDota2Leagues() {
    return this.http.get('https://api.pandascore.co/dota2/leagues?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getDota2Series() {
    return this.http.get('https://api.pandascore.co/dota2/series?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getDota2Tournaments() {
    return this.http.get('https://api.pandascore.co/dota2/tournaments?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
  }

  getDota2Matches() {
    return this.http.get('https://api.pandascore.co/dota2/matches?token=rmhig-Fuz23S9tfDT14uoycApeyVynxJLv2Ljazjz3nYGTT7S4s')
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
