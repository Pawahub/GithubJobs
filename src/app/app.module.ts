import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
<<<<<<< Updated upstream
import {RoutingModule} from './router/routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
=======
import {RoutingModule} from './routes/routing.module';
import {StoreModule} from './store/store.module';
>>>>>>> Stashed changes

import {reducer} from './store/reducer';
import {JobService} from './shared/job.service';
<<<<<<< Updated upstream
=======
import {UserPreferences} from './shared/user.preferences.service';
>>>>>>> Stashed changes

import {PagesPipe} from './shared/pages.pipe';
import {SafePipe} from './shared/sanitize.pipe';
import {DatePipe} from './shared/date.pipe';

import {AppComponent} from './app.component';
<<<<<<< Updated upstream
import {JobPageComponent} from './components/job-page/job-page.component';
import {JobControlComponent} from './components/job-control/job-control.component';
import {JobListComponent} from './components/job-list/job-list.component';
import {JobDetailComponent} from './components/job-detail/job-detail.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {SearchComponent} from './components/search/search.component';
=======
import {JobPageComponent} from './job-page/job-page.component';
import {JobControlComponent} from './job-page/job-control/job-control.component';
import {JobListComponent} from './job-page/job-list/job-list.component';
import {JobDetailComponent} from './job-detail/job-detail.component';
import {PaginationComponent} from './job-page/pagination/pagination.component';
import {SearchComponent} from './job-page/search/search.component';
import { StoreModule } from '@ngrx/store';
>>>>>>> Stashed changes


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
<<<<<<< Updated upstream
    StoreModule.forRoot({appState: reducer}, {}),
    EffectsModule.forRoot([]),
=======
    StoreModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    JobService,
    UserPreferences
>>>>>>> Stashed changes
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
