import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

/* import { Name2Component } from './';
import { Name3Component } from './';
import { Name4Component } from './';
import { PageNotFoundComponent } from './'; */

const APP_ROUTES: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  /* Ruta para la página de descripción del heroe al que
      se le debe pasar el identificador como parámetro*/
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
  /*{ path: '**', component: PageNotFoundComponent }, */
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
