import {Action} from '@ngrx/store';
import {JobModel} from '../models/job.model';

export const NEXT_PAGE = '';
export const PREV_PAGE = '';
export const GET_JOBS = '[JobModel] Get';
export const ADD_JOBS = '[JobModel] Add';

export class NextPage implements Action {
  readonly type = NEXT_PAGE;

  constructor(public payload: number) {
  }
}

export class PrevPage implements Action {
  readonly type = PREV_PAGE;

  constructor(public payload: number) {
  }
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

export type Actions = NextPage | PrevPage | GetJobs | AddJobs;
