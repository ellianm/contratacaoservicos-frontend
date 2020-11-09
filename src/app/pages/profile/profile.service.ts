import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { IServiceTemplate } from '../../core/interfaces/iServiceTemplate';
import { User } from '../../core/classes/user';
import { IRateJob } from '../../core/interfaces/iRateJob';
import { IUserCep } from '../../core/interfaces/iUserCep';
import { IUserJob } from '../../core/interfaces/iUserJob';
import { DynamicConfigMaidComponent } from './config/dynamics/dynamic-config-maid/dynamic-config-maid.component';
import { IUserFile } from 'src/app/core/interfaces/iUserFile';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  constructor(private http: HttpClient) { }
  checkUserNameTaken(userName: string) {
    return this.http.post(environment.API_URL + '/user/exists/', { userName });
  }
  saveUpdate(user: User) {
    return this.http.put(environment.API_URL + '/user/' + user.id, user);
  }
  savePhoto(userFile: IUserFile) {
    const formData = new FormData();
    formData.append('id', userFile.id);
    formData.append('avatar', userFile.avatar);
    return this.http.post(environment.API_URL + '/user/upload/', formData);
  }
  saveRateJob(rateList: IRateJob[]) {
    return this.http.post(environment.API_URL + '/ServicesContract/updateAvaliation/', JSON.stringify(rateList));
  }
  saveUserCeps(userCeps: IUserCep[]) {
    return this.http.post(environment.API_URL + '/UserCep/', JSON.stringify(userCeps.filter(user => !user.id)));
  }
  saveUserJobs(userJobs: IUserJob[]) {
    return this.http.post(environment.API_URL + '/UserJob/', JSON.stringify(userJobs.filter(user => !user.id)));
  }
  removeCep(userCep: IUserCep) {
    return this.http.delete(environment.API_URL + '/userCep/' + userCep.id);
  }
  removeJob(userJob: IUserJob) {
    return this.http.delete(environment.API_URL + '/userJob/' + userJob.id);
  }
  getDynamicConfig(name: string): Observable<IServiceTemplate> {
    return this.http.post<IServiceTemplate>(environment.API_URL + '/servicestemplate/exists/', { name });
  }
  getDynamicConfigComponent(serviceTemplate: IServiceTemplate) {
    if (serviceTemplate.name === 'domestica') { return DynamicConfigMaidComponent; }
  }
  getRateJobPending(clientId: string): Observable<IRateJob[]> {
    return this.http.get<IRateJob[]>(environment.API_URL + '/ServicesContract/pending/' + clientId);
  }
  getRateJobHistory(clientId: string): Observable<IRateJob[]> {
    return this.http.get<IRateJob[]>(environment.API_URL + '/ServicesContract/history/' + clientId);
  }
  getContractedJobPending(providerId: string): Observable<IRateJob[]> {
    return this.http.get<IRateJob[]>(environment.API_URL + '/ServicesContract/pendingProvider/' + providerId);
  }
  getContractedJobHistory(providerId: string): Observable<IRateJob[]> {
    return this.http.get<IRateJob[]>(environment.API_URL + '/ServicesContract/historyProvider/' + providerId);
  }
  getUserCeps(providerId: string) {
    return this.http.get<IUserCep[]>(environment.API_URL + '/UserCep/user/' + providerId);
  }
  getContractedJobInProgress(providerId: string): Observable<IRateJob[]> {
    return this.http.get<IRateJob[]>(environment.API_URL + '/ServicesContract/inProgressProvider/' + providerId);
  }
  getContractedJobInProgressClient(clientId: string): Observable<IRateJob[]> {
    return this.http.get<IRateJob[]>(environment.API_URL + '/ServicesContract/inProgressClient/' + clientId);
  }
  getRateJobHistoryLimited(providerId: string, serviceName: string) {
    return this.http.post<IRateJob[]>(environment.API_URL + '/ServicesContract/historyProviderLimited/', { providerId, serviceName });
  }
  getUserJobs(providerId: string) {
    return this.http.get<IUserJob[]>(environment.API_URL + '/UserJob/user/' + providerId);
  }
}
