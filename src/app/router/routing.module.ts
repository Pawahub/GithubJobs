import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JobDetailComponent} from '../components/job-detail/job-detail.component';
import {JobPageComponent} from '../components/job-page/job-page.component';

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
