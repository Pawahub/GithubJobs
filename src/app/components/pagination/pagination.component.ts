import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobService} from '../../shared/job.service';
import {Store} from '@ngrx/store';
import {AppStateModel} from '../../models/app-state.model';
import {StateModel} from '../../models/state.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  state: StateModel;

  constructor(public jobService: JobService,
              private store: Store<AppStateModel>) {
  }

  ngOnInit(): void {
    this.subscription = this.store.select('appState').subscribe(store => this.state = store);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goTo(direction): void {
    if (this.state.page + direction >= this.state.pages) {
      // this.jobService.getPage().subscribe();
    } // todo fix re-request if old and new value of this.page is the same

    if (this.state.page + direction !== 0) {
      this.state.page += direction;
    }
  }
}
