import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducer} from '../reducers/reducer';


const initialState = {
  jobs: [],
  page: 1,
  pages: Math.ceil(this.jobs.length / 5),
};

@NgModule({
  imports: [StoreModule.forRoot(reducer(initialState, action))],
  exports: [StoreModule]
})
export class StateModule {

}
