import { IProvider } from './iProvider';
import { IClient } from './iClient';

export interface IRateJob {
   id: number;
   serviceName: string;
   dtConclusion: Date;
   dtSolicitation: string;
   avaliation: number;
   provider: IProvider;
   action: boolean;
   userId: string;
   origin: string;
   client: IClient;
   observation: string;
}
