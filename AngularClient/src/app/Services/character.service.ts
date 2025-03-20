import {HttpClient, provideHttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})


export class CharacterService{
  private baseURL = "http://localhost:8080/"
  private postId: any;
  private errorMessage: any;
  constructor(private http: HttpClient) {}

  public getPcData(characterId: number, isPcData : boolean = true) : Observable<any> {
      return this.http.get<any>(this.baseURL+'characters/' + characterId+ '?isPcData=' + isPcData);
  }

  public getOppData(characterId: number, isPcData : boolean = false) : Observable<any> {
      return this.http.get<any>(this.baseURL+'characters/' + characterId + '?isPcData=' + isPcData);
  }

  public getSpecificList(characterId: number, isPcData : boolean, otherCharId: number): Observable<any> {
    return this.http.get<any>(this.baseURL+'characters/' + characterId + '?isPcData=' + isPcData);
  }

}
