import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest} from 'rxjs';

@Injectable()
export class UserPreferences {
  public description$ = new BehaviorSubject('');
  public location$ = new BehaviorSubject('');
  public fullTime$ = new BehaviorSubject(false);

  allPreferences$ = combineLatest([this.description$, this.location$, this.fullTime$]);
}
