import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlBase = 'https://rjk-backend-hwb4bjfhexaybagg.spaincentral-01.azurewebsites.net/api/'

  constructor(private http: HttpClient) { }

  getLeagues() {
    return this.http.get(this.urlBase + 'leagues')
  }

}
