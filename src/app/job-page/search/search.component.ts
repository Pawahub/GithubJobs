import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserPreferences} from '../../shared/user.preferences.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public userPreferences: UserPreferences) {
  }

  ngOnInit(): void {
  }

  startSearch(search: NgForm): void {
    this.userPreferences.description$.next(search.form.value.description);
    search.reset();
  }
}
