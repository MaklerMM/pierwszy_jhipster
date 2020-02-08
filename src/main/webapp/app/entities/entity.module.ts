import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.PierwszyjhipsterPersonModule)
      },
      {
        path: 'glasses',
        loadChildren: () => import('./glasses/glasses.module').then(m => m.PierwszyjhipsterGlassesModule)
      },
      {
        path: 'biker',
        loadChildren: () => import('./biker/biker.module').then(m => m.PierwszyjhipsterBikerModule)
      },
      {
        path: 'bike',
        loadChildren: () => import('./bike/bike.module').then(m => m.PierwszyjhipsterBikeModule)
      },
      {
        path: 'driver',
        loadChildren: () => import('./driver/driver.module').then(m => m.PierwszyjhipsterDriverModule)
      },
      {
        path: 'car',
        loadChildren: () => import('./car/car.module').then(m => m.PierwszyjhipsterCarModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class PierwszyjhipsterEntityModule {}
