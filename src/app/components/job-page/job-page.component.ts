import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {JobService} from '../../shared/job.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html'
})
export class JobPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(public jobService: JobService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.jobService.onJobsLoaded().subscribe(() => {
      this.jobService.page = 1;
      this.jobService.pages = Math.ceil(this.jobService.jobs.length / 5);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
