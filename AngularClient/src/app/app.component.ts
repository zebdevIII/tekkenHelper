import {Component, OnInit, ViewChild, ElementRef, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {CharacterService} from "./Services/character.service"
import {HttpClient, provideHttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  private http = inject(HttpClient);
  private cs : CharacterService;
  public incomingText: String = "Unloaded";

  constructor(private charServ : CharacterService) {
    this.cs = charServ;
  }

  ngOnInit(){
    this.cs = new CharacterService(this.http);
  }

  public sendText(){
    alert('data saved')
    var text = 'Test String;'
    this.cs.postPlayerCharacterNotes(text);
  }
  public getText() {
    var incomingText = this.cs.getPcData().subscribe({
      next: value => {
        this.incomingText = value;
        }
      }
    );
    alert('data receieved')
  }
}
