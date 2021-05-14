import * as Actions from './actions';
import {JobModel} from '../models/job.model';

export interface StateModel {
  pageURL: number;
  description: string;
  location: string;
  fullTime: boolean;
  jobs: JobModel[];
  page: number;
}

const initialState: StateModel = {
  pageURL: 1,
  description: '',
  location: '',
  fullTime: false,
  jobs: [],
  page: 0,
};

export function reducer(state: StateModel = initialState,
                        action: Actions.ActionsType): StateModel {
  switch (action.type) {
    case Actions.GET_JOBS:
      return {...state, jobs: [...action.payload]};
    case Actions.ADD_JOBS:
      return {...state, jobs: [...state.jobs, ...action.payload], pageURL: state.pageURL + 1};
    case Actions.NEXT_PAGE:
      return {...state, page: state.page + 1};
    case Actions.PREV_PAGE:
      return {...state, page: state.page - 1};
    case Actions.GO_TO_PAGE:
      return {...state, page: action.payload};
    case Actions.CHANGE_DESCRIPTION:
      return {...state, description: action.payload};
    case Actions.CHANGE_LOCATION:
      return {...state, location: action.payload};
    case Actions.TOGGLE_FULLTIME:
      return {...state, fullTime: !state.fullTime};
    default:
      return state;
  }
}
