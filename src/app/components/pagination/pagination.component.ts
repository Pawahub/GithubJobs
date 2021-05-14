import {Component} from '@angular/core';
import {JobService} from '../../shared/job.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor(public jobService: JobService) {
  }

  goTo(direction): void {
    if (this.jobService.page + direction >= this.jobService.pages) {
      this.jobService.getPage().subscribe(() => this.jobService.pages = Math.ceil(this.jobService.jobs.length / 5));
    } // todo fix re-request if old and new value of this.page is the same

    if (this.jobService.page + direction !== 0) {
      this.jobService.page += direction;
    }
  }
}
