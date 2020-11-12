import { IProvider } from './iProvider';

export interface IUserJob {
   object: any;
   id: number;
   jobName: string;
   user: IProvider;
   value: number;
   observation: string;
}