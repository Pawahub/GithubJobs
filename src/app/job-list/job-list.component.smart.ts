import {Component, OnInit, OnDestroy} from '@angular/core';
import {JobService} from '../shared/job.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-job-list-smart',
  template: `
      <app-job-list-presentation [jobs]="this.jobService.jobs"
                                 [loading]="this.jobService.loading"
                                 [page]="this.page"
                                 [pages]="this.pages"
                                 (goTo)="this.goTo($event)"
      ></app-job-list-presentation>`,
  styleUrls: ['./job-list.component.presentation.css'],
})
export class JobListSmartComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public page: number;
  public pages: number;

  constructor(public jobService: JobService) {
  }

  ngOnInit(): void {
    this.subscription = this.jobService.onJobsLoaded().subscribe(() => {
      this.page = 1;
      this.pages = Math.ceil(this.jobService.jobs.length / 5);
    });
  }

  goTo(direction): void {
    if (this.page + direction >= this.pages) {
      this.jobService.getPage().subscribe(() => this.pages = Math.ceil(this.jobService.jobs.length / 5));
    } // todo fix re-request if old and new value of this.page is the same

    if (this.page + direction !== 0) {
      this.page += direction;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
