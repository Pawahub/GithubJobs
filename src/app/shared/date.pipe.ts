import {Pipe, PipeTransform} from '@angular/core';
import {formatDistanceToNow} from 'date-fns';


@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  public transform(date: string): string {
    return formatDistanceToNow(new Date(date), {addSuffix: true});
  }
}
