import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
<<<<<<< Updated upstream:src/app/router/routing.module.ts
import {JobDetailComponent} from '../components/job-detail/job-detail.component';
import {JobPageComponent} from '../components/job-page/job-page.component';
=======
import {JobDetailComponent} from '../job-detail/job-detail.component';
import {JobPageComponent} from '../job-page/job-page.component';
>>>>>>> Stashed changes:src/app/routes/routing.module.ts

const routes: Routes = [
  {
    path: '',
    component: JobPageComponent
  },
  {
    path: 'detail/:id',
    component: JobDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
