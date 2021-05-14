import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {AppState} from '../../store/app-state';
import {ChangeLocation, ToggleFullTime} from '../../store/actions';

@Component({
  selector: 'app-job-control',
  templateUrl: './job-control.component.html',
  styleUrls: ['./job-control.component.css']
})
export class JobControlComponent implements OnDestroy {
  private subscription: Subscription;
  public fullTime: boolean;

  constructor(public store: Store<AppState>) {
    this.subscription = store.select('appState').subscribe(data => this.fullTime = data.fullTime);
  }

  toggleFullTime(): void {
    this.store.dispatch(new ToggleFullTime());
  }

  changeLocation(event): void {
    this.store.dispatch(new ChangeLocation(event.target.value));
    if (event.target.id === 'location') {
      event.target.value = '';
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
