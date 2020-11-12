import { IProvider } from './iProvider';
import { IClient } from './iClient';

export interface IServiceContract {
   id: number;
   serviceName: string;
   dtConclusion: string;
   dtSolicitation: string;
   observation: string;
   avaliation: number;
   avaliationObs: string;
   action: boolean;
   provider: IProvider;
   client: IClient;
   object: any;
}