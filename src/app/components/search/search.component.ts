import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppStateModel} from '../../models/app-state.model';
import {ChangeDescription} from '../../store/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private store: Store<AppStateModel>) {
  }

  startSearch(search: NgForm): void {
    this.store.dispatch(new ChangeDescription(search.form.value.description));
    search.reset();
  }
}
