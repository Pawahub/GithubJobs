import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobService} from '../../shared/job.service';
import {JobModel} from '../../models/job.model';
import {Subscription} from 'rxjs';
import {formatDistanceToNow} from 'date-fns';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit, OnDestroy {
  job: JobModel;
  subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute,
              public jobService: JobService) {
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.subscription = this.jobService.getDetails(id).subscribe(item => this.job = item);
  }

  getDate(date): string {
    return formatDistanceToNow(new Date(date), {addSuffix: true});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
