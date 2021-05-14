import * as Actions from '../actions/actions';
import {JobModel} from '../models/job.model';

export function reducer(state: { pages: number; jobs: JobModel[]; page: number }, action: Actions): void {
  switch (action.type) {
    case Actions.NEXT_PAGE:
      return [...state, action.payload];
    case Actions.PREV_PAGE:
      return [...state, action.payload];
    case Actions.GET_JOBS:
      return [...state, action.payload];
    case Actions.ADD_JOBS:
      return [...state, action.payload];
    default:
      return state;
  }
}
