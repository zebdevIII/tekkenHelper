import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService{
  private baseURL = "http://localhost:8080/player/character"
  constructor(private http: HttpClient) {}
  getPlayerCharacter() : Observable<any> {
    return this.http.get(this.baseURL);
  }
}
