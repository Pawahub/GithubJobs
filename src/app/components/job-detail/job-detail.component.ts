import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {JobService} from '../../shared/job.service';
import {JobModel} from '../../models/job.model';

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
