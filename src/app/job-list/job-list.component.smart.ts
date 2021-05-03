import {Component, OnInit} from '@angular/core';
import {JobService} from '../shared/job.service';
import {Observable} from 'rxjs';
import {JobModel} from '../models/job.model';

@Component({
  selector: 'app-job-list-smart',
  template: `
      <app-job-list-presentation [jobs]="this.jobs | async"
                                 [loading]="this.jobService.loading"
                                 [pageNum]="this.jobService.pageNum"
                                 (goTo)="this.goTo($event)"
      ></app-job-list-presentation>`,
  styleUrls: ['./job-list.component.presentation.css'],
})
export class JobListSmartComponent implements OnInit {
  jobs: Observable<JobModel[]>;

  constructor(public jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }

  goTo(direction): void {
    if (this.jobService.pageNum + direction !== 0 ) {
      this.jobService.pageNum += direction;
      this.jobs = this.jobService.getJobs();
    }
  }
}
