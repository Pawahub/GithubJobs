import {Component, Input} from '@angular/core';
import {JobModel} from '../../models/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  @Input() jobs: JobModel[] = [];
  @Input() loading: boolean;
  @Input() page: number;
  @Input() pages: number;
}
