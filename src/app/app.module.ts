import {NgModule} from '@angular/core';
import {RoutingModule} from './router/routing.module';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {reducer} from './store/reducer';
import {JobService} from './shared/job.service';

import {PagesPipe} from './shared/pages.pipe';
import {SafePipe} from './shared/sanitize.pipe';
import {DatePipe} from './shared/date.pipe';

import {AppComponent} from './app.component';
import {JobPageComponent} from './components/job-page/job-page.component';
import {JobControlComponent} from './components/job-control/job-control.component';
import {JobListComponent} from './components/job-list/job-list.component';
import {JobDetailComponent} from './components/job-detail/job-detail.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {SearchComponent} from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    JobPageComponent,
    JobControlComponent,
    JobListComponent,
    JobDetailComponent,
    PaginationComponent,
    SearchComponent,
    PagesPipe,
    SafePipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    StoreModule.forRoot({appState: reducer}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
