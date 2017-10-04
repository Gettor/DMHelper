import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from './game.service';
import { GameComponent } from './game.component';
//import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './game.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      FormsModule,
      routing
  ],
  providers : [
      //HttpClient,
      appRoutingProviders,
      { provide : 'API_HOST',  useValue : 'http://localhost:3000'},
      { provide : 'API_ENDPOINT', useValue : '/api'},
      GameService
  ],
  bootstrap: [GameComponent]
})
export class GameModule { }
