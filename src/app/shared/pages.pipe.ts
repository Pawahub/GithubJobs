import {Pipe, PipeTransform} from '@angular/core';
import {JobModel} from '../models/job.model';

@Pipe({
  name: 'pagesFilter'
})
export class PagesPipe implements PipeTransform {
  transform(jobs: JobModel[], page: number): JobModel[] {
    let endItem: number;
    page === 1 ? endItem = 5 : endItem = 5 * page;
    const startItem = endItem - 5;
    return jobs.slice(startItem, endItem);
  }
}
