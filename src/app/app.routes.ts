import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { widgetComponent } from './widget';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
   { path: 'widget/:id',  component: widgetComponent },
  { path: '**',    component: NoContentComponent },
];
