import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateModel} from '../../models/app-state.model';
import {StateModel} from '../../models/state.model';
import {LoadJobs} from '../../store/actions';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html'
})
export class JobPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  state: StateModel;


  constructor(public router: Router,
              private store: Store<AppStateModel>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadJobs());
    this.subscription = this.store.select('appState').subscribe(store => this.state = store);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
