import { RouterModule }   from '@angular/router';
import {HeroesComponent} from './heroes.component';

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])
