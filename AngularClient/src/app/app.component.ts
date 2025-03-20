import {Component, OnInit, ViewChild, ElementRef, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {CharacterService} from "./Services/character.service"
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {TiptapEditorDirective} from 'ngx-tiptap';
import {Editor} from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import {Node} from '@tiptap/core';
import Placeholder from '@tiptap/extension-placeholder';
import {MenuComponent} from './components/menu/menu.component';
import {characterMap} from './shared/characterMap'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, FormsModule, NgOptimizedImage, NgForOf, NgIf, TiptapEditorDirective, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  private http = inject(HttpClient);
  private cs : CharacterService;
  public incomingText: any | undefined;
  private numOfCharacters: number = 34;
  public characterList = Array();
  public playerCharacter : number = 0;
  public oppCharacter: number = 0;
  protected readonly characterMap = characterMap;


  pcText: String  = 'Get Ready for the next battle!';
  oppText: String = 'Get Ready for the next battle!';
  specificText: String = "Get Ready for the next battle!"

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

  Node = new Node()

  pcEditor  = new Editor({
    extensions: [StarterKit, Placeholder],
    editorProps: {
      attributes: {
        class: 'p-2 focus:border-none border-black border-t-2 outline-none',
        spellcheck: 'false',
      },
    },
  });

  oppEditor = new Editor({
    extensions: [StarterKit],
  });

  specificEditor = new Editor({
    extensions: [StarterKit],
  });



  ngOnInit(){
    this.cs = new CharacterService(this.http);
  }

  ngOnDestroy(): void {
  }

  public sendText(){
    alert('data saved')
    var text = 'Test String;'
    this.cs.postPlayerCharacterNotes(text);
  }

  public getPcText(characterId: number) {
    if (this.oppCharacter == 0){
      var subscriptionReturn = this.cs.getPcData(characterId).subscribe({
          next: value => {
            this.pcText = value.text
            this.playerCharacter = characterId
          }
        }
      );
      alert('data receieved')
    } else{
      var subscriptionReturn = this.cs.getPcData(characterId).subscribe({
          next: value => {
            this.pcText = value.text
            this.playerCharacter = characterId
          }
        }
      );
      alert('data receieved')
    }

  }

  public getOppText(characterId: number) {
    if(this.playerCharacter == 0) {
      var subscriptionReturn = this.cs.getOppData(characterId).subscribe({
          next: value => {
            this.oppText = value.text
            this.oppCharacter = characterId
          }
        }
      );
      alert('data receieved')
    } else{
      var subscriptionReturn = this.cs.getOppData(characterId).subscribe({
          next: value => {
            this.oppText = value.text
            this.oppCharacter = characterId
          }
        }
      );
      alert('data receieved')

    }
  }

}

/*
  <div id="playerEditor">
      <tiptap-editor [editor]="pcEditor" [(ngModel)]="pcText">

      </tiptap-editor>
    </div>


 */
