import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from './routing.module';

import {JobService} from './shared/job.service';
import {UserPreferences} from './shared/user.preferences.service';
import {PagesPipe} from './shared/pages.pipe';
import {SafePipe} from './shared/sanitize.pipe';

import {AppComponent} from './app.component';
import {JobPageComponent} from './job-page/job-page.component';
import {JobControlComponent} from './job-page/job-control/job-control.component';
import {JobListComponent} from './job-page/job-list/job-list.component';
import {JobDetailComponent} from './job-detail/job-detail.component';
import {PaginationComponent} from './job-page/pagination/pagination.component';
import {SearchComponent} from './job-page/search/search.component';

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
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [
    JobService,
    UserPreferences
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
