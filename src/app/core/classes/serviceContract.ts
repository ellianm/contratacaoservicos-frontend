import { IServiceContract } from '../interfaces/iServiceContract';
import { Client } from './client';
import { IClient } from '../interfaces/iClient';
import { IProvider } from '../interfaces/iProvider';
import { Provider } from './provider';

export class ServiceContract implements IServiceContract {
    id: number;
    serviceName: string;
    dtConclusion: string;
    dtSolicitation: string;
    observation: string;
    avaliation: number;
    action: boolean;
    provider: IProvider;
    client: IClient;
    value: number;


    constructor() {
        this.client = new Client();
        this.provider = new Provider();
    }
}