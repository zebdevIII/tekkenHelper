import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.colsmponent.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tekkenHelper';

  pathMaker(): number {
    for(var i = 0;i<32;i++) {
      console.log("here");
    }
    return 5;

  }

}
