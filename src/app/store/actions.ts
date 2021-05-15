import {Action} from '@ngrx/store';
import {JobModel} from '../models/job.model';

export const LOAD_JOBS = 'LOAD_JOBS';
export const GET_JOBS = 'GET_JOBS';
export const ADD_JOBS = 'ADD_JOBS';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const GO_TO_PAGE = 'GO_TO_PAGE';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const TOGGLE_FULLTIME = 'TOGGLE_FULLTIME';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export class LoadJobs implements Action {
  readonly type = LOAD_JOBS;
}

export class GetJobs implements Action {
  readonly type = GET_JOBS;

  constructor(public payload: JobModel[]) {
  }
}

export class AddJobs implements Action {
  readonly type = ADD_JOBS;

  constructor(public payload: JobModel[]) {
  }
}

export class NextPage implements Action {
  readonly type = NEXT_PAGE;
}

export class PrevPage implements Action {
  readonly type = PREV_PAGE;
}

export class GoToPage implements Action {
  readonly type = GO_TO_PAGE;

  constructor(public payload: number) {
  }
}

export class ChangeDescription implements Action {
  readonly type = CHANGE_DESCRIPTION;

  constructor(public payload: string) {
  }
}

export class ChangeLocation implements Action {
  readonly type = CHANGE_LOCATION;

  constructor(public payload: string) {
  }
}

export class ToggleFullTime implements Action {
  readonly type = TOGGLE_FULLTIME;
}

export class ToggleLoading implements Action {
  readonly type = TOGGLE_LOADING;

  constructor(public payload: boolean) {
  }
}

export type ActionsType =
  LoadJobs
  | GetJobs
  | AddJobs
  | NextPage
  | PrevPage
  | GoToPage
  | ChangeDescription
  | ChangeLocation
  | ToggleFullTime
  | ToggleLoading;
