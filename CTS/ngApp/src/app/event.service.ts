import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _EventsUrl="https://localhost:3000/api/events";
  private _specialEventsUrl="https://localhost:3000/api/special";
  constructor(private http: HttpClient) { }
  getEvents(){
    return this.http.get<any>(this._EventsUrl)
  }
  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl)
  }
}
