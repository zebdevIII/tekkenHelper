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

  getPcData(characterId: number) : Observable<any> {
      return this.http.get<any>(this.baseURL+'characters/' + characterId);
  }

  postPlayerCharacterNotes(text: string) {
    this.http.post<any>(this.baseURL, { title: 'Angular POST Request Example' }).subscribe({
      next: data => {
        this.postId = data.id;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }
}
