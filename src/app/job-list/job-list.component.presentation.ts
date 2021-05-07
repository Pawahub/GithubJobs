import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JobModel} from '../models/job.model';
import {formatDistanceToNow} from 'date-fns';

@Component({
  selector: 'app-job-list-presentation',
  templateUrl: './job-list.component.presentation.html',
  styleUrls: ['./job-list.component.presentation.css']
})

export class JobListPresentationComponent {
  @Input() jobs: JobModel[] = [];
  @Input() loading: boolean;
  @Input() page: number;
  @Input() pages: number;
  @Output() goTo = new EventEmitter<number>();

  getDate(date): string {
    return formatDistanceToNow(new Date(date), {addSuffix: true});
  }
}
