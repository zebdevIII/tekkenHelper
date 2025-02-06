import {Component, OnInit, ViewChild, ElementRef, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {CharacterService} from "./Services/character.service"
import {HttpClient, provideHttpClient} from '@angular/common/http';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { TiptapEditorDirective } from 'ngx-tiptap';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, TiptapEditorDirective, FormsModule, NgOptimizedImage, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  private http = inject(HttpClient);
  private cs : CharacterService;
  public incomingText: any | undefined;
  private numOfCharacters: number = 34;
  public characterList = Array();

  constructor(private charServ : CharacterService) {
    this.cs = charServ;
    for (let i = 0; i <this.numOfCharacters; i++) {
      this.characterList.push({
        id: i+1,
        source: "characterIcons/" + Number(i+1) + ".png"
      })
    }
    console.log(this.characterList);
  }

  ngOnInit(){
    this.cs = new CharacterService(this.http);
  }

  editor = new Editor({
    extensions: [StarterKit],
  });

  value : String  = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public sendText(){
    alert('data saved')
    var text = 'Test String;'
    this.cs.postPlayerCharacterNotes(text);
  }

  public getText(characterId: number) {
    var subscriptionReturn = this.cs.getPcData(characterId).subscribe({
      next: value => {
        this.incomingText = value;
        }
      }
    );
    this.value = this.incomingText.text;
    alert('data receieved')
  }
}
