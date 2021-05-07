import {Directive, HostListener} from '@angular/core';
import {JobService} from './job.service';

@Directive({
  selector: '[appGoTo]',
})
export class PaginationDirective {
  @HostListener('click', ['$event.target'])
  onClick(): void {

  }

  constructor(public jobService: JobService) {
  }

}
