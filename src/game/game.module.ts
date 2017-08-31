import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from './game.service';

import { GameComponent } from './game.component';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers : [
      { provide : 'API_ENDPOINT',  useValue : 'http://localhost:3000/api'},
      GameService
  ],
  bootstrap: [GameComponent]
})
export class GameModule { }
