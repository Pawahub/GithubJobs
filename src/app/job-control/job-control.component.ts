import {Component, OnInit} from '@angular/core';
import {UserPreferences} from '../shared/user.preferences.service';

@Component({
  selector: 'app-job-control',
  templateUrl: './job-control.component.html',
  styleUrls: ['./job-control.component.css']
})
export class JobControlComponent implements OnInit {

  constructor(public userPreferences: UserPreferences) {
  }

  ngOnInit(): void {
  }

  toggleFullTime(): void {
    this.userPreferences.fullTime$.next(!this.userPreferences.fullTime$);
  }

  changeLocation(event): void {
    this.userPreferences.location$.next(event.target.value);
    if (event.target.type === 'text') {
      event.target.value = '';
    }
  }

}
