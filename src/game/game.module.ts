import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GameComponent } from './game.component';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [GameComponent]
})
export class GameModule { }
