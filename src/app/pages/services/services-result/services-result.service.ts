import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/core/user/user.service';
import { ServiceContract } from 'src/app/core/classes/serviceContract';
import { IDynamicValue } from 'src/app/core/interfaces/IDynamicValue';

@Injectable({
  providedIn: 'root'
})
export class ServicesResultService {

  constructor(
    private userService: UserService,
    private http: HttpClient) { }


  execute(serviceName: string) {
    return this.http.post<any[]>(environment.API_URL + '/userCep/searchCep/', { serviceName, cep: this.userService.userToken.cep});
  }

  contract(serviceContract: ServiceContract) {
    return this.http.post(environment.API_URL + '/servicescontract/', serviceContract);
  }

  getValues(URL: string, value: any): Observable<IDynamicValue[]> {
    return this.http.post<IDynamicValue[]>(environment.API_URL + URL, value);
  }

}
