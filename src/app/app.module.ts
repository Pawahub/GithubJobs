import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {JobService} from './shared/job.service';
import {UserPreferences} from './shared/user.preferences.service';

// import {PaginationDirective} from './shared/pagination.directive';

import {AppComponent} from './app.component';
import {JobControlComponent} from './job-control/job-control.component';
import {JobDetailComponent} from './job-list/job-detail/job-detail.component';
import {SearchComponent} from './search/search.component';
import {JobListPresentationComponent} from './job-list/job-list.component.presentation';
import {JobListSmartComponent} from './job-list/job-list.component.smart';

@NgModule({
  declarations: [
    AppComponent,
    JobListPresentationComponent,
    JobListSmartComponent,
    JobControlComponent,
    JobDetailComponent,
    SearchComponent,
    // PaginationDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    JobService,
    UserPreferences
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
