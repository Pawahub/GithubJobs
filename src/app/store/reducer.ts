import * as AppActions from './actions';
import {StateModel} from '../models/state.model';

const initialState: StateModel = {
  pageURL: 1,
  loading: true,
  description: '',
  location: '',
  fullTime: false,
  jobs: [],
  page: 0,
  pages: 0
};

export function reducer(state: StateModel = initialState,
                        action: AppActions.ActionsType): StateModel {
  switch (action.type) {
    case AppActions.GET_JOBS:
      return {...state, jobs: [...action.payload], pageURL: 1, pages: Math.ceil(state.jobs.length / 5)};
    case AppActions.ADD_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload],
        pageURL: state.pageURL + 1,
        pages: state.pages + Math.ceil(action.payload.length / 5)
      };
    case AppActions.NEXT_PAGE:
      return {...state, page: state.page + 1};
    case AppActions.PREV_PAGE:
      return {...state, page: state.page - 1};
    case AppActions.GO_TO_PAGE:
      return {...state, page: action.payload};
    case AppActions.CHANGE_DESCRIPTION:
      return {...state, description: action.payload};
    case AppActions.CHANGE_LOCATION:
      return {...state, location: action.payload};
    case AppActions.TOGGLE_FULLTIME:
      return {...state, fullTime: !state.fullTime};
    case AppActions.TOGGLE_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
}
