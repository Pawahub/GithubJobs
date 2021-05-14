import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app-state';
import {ChangeDescription} from '../../store/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private store: Store<AppState>) {
  }

  startSearch(search: NgForm): void {
    this.store.dispatch(new ChangeDescription(search.form.value.description));
    search.reset();
  }
}
