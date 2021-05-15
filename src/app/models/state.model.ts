import {JobModel} from './job.model';

export interface StateModel {
  pageURL: number;
  loading: boolean;
  description: string;
  location: string;
  fullTime: boolean;
  jobs: JobModel[];
  page: number;
  pages: number;
}
