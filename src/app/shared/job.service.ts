import {Injectable} from '@angular/core';
import {JobModel} from '../models/job.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {finalize, first, map, switchMap} from 'rxjs/operators';
import {UserPreferences} from './user.preferences.service';
import {Observable} from 'rxjs';

@Injectable()
export class JobService {
  public jobs: JobModel[] = [];
  public loading = true;
  private page: number;
  private url = 'https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json';

  constructor(
    private http: HttpClient,
    private userPreferences: UserPreferences) {
  }

  getJobs(page = this.page = 1): Observable<JobModel[]> {
    this.loading = true;
    return this.http.get<JobModel[]>(this.url, {
      params: new HttpParams()
        .set('page', `${page}`)
        .set('description', `${this.userPreferences.description$.getValue()}`)
        .set('location', `${this.userPreferences.location$.getValue()}`)
        .set('full_time', `${this.userPreferences.fullTime$.getValue()}`)
    });
  }

  onJobsLoaded(): Observable<JobModel[]> {
    return this.userPreferences.allPreferences$.pipe(
      switchMap(() => this.getJobs().pipe(
        map((jobs: JobModel[]) => this.jobs = jobs),
        finalize(() => this.loading = false)
      ))
    );
  }

  getPage(): Observable<JobModel[]> {
    this.page += 1;
    return this.getJobs(this.page).pipe(
      first(),
      map((jobs: JobModel[]) => this.jobs = [...this.jobs, ...jobs]),
      finalize(() => this.loading = false)
    );
  }
}
