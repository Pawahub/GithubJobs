import {Injectable} from '@angular/core';
import {JobModel} from '../models/job.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, map, switchMap} from 'rxjs/operators';
import {UserPreferences} from './user.preferences.service';

@Injectable()
export class JobService {
  public jobs: JobModel[] = [];
  public loading = true;
  public pageNum = 1;

  constructor(
    private http: HttpClient,
    private userPreferences: UserPreferences) {
  }

  getJobs(): Observable<JobModel[]> {
    this.loading = true;
    return this.userPreferences.allPreferences$.pipe(
      switchMap(([description, location, fullTime]: any[]) => {
        return this.http.get<JobModel[]>('https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json', {
          params: new HttpParams()
            .set('page', `${this.pageNum}`)
            .set('description', `${description}`)
            .set('location', `${location}`)
            .set('full_time', `${fullTime}`)
        }).pipe(
          map((jobs: JobModel[]) => this.jobs = jobs),
          finalize(() => this.loading = false)
        );
      })
    );
  }
}
