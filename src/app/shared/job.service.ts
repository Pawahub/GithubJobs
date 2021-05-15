import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {JobModel} from '../models/job.model';
import {StateModel} from '../models/state.model';
import {AppStateModel} from '../models/app-state.model';


@Injectable()
export class JobService {
  private state: StateModel;
  private url = 'https://cors-anywhere.herokuapp.com/jobs.github.com/positions';

  constructor(private http: HttpClient,
              private store: Store<AppStateModel>) {
    this.store.select('appState').subscribe(data => this.state = data);
  }

  getJobs(): Observable<JobModel[]> {
    return this.http.get<JobModel[]>(this.url + '.json', {
      params: new HttpParams()
        .set('page', `${this.state.pageURL}`)
        .set('description', `${this.state.description}`)
        .set('location', `${this.state.location}`)
        .set('full_time', `${this.state.fullTime}`)
    });
  }

  getDetails(id): Observable<JobModel> {
    let job = this.state.jobs.find(item => item.id === id);
    if (!job) {
      return this.http.get<JobModel>(this.url + '/' + id + '.json').pipe(
        map(item => job = item)
      );
    } else {
      return from([job]);
    }
  }
}
