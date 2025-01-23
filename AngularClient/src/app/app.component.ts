import {Component, OnInit, ViewChild, ElementRef, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {CharacterService} from "./Services/character.service"
import {HttpClient, provideHttpClient} from '@angular/common/http';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { TiptapEditorDirective } from 'ngx-tiptap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, TiptapEditorDirective, FormsModule],
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

  editor = new Editor({
    extensions: [StarterKit],
  });

  value = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content

  ngOnDestroy(): void {
    this.editor.destroy();
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
