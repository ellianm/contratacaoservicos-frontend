import { IProvider } from './iProvider';

export interface IUserJob {
   id: number;
   jobName: string;
   user: IProvider;
   value: number;
   observation: string;
}