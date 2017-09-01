import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game.component';

const appRoutes : Routes = [
  {
    path : '',
    component : GameComponent
  }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
