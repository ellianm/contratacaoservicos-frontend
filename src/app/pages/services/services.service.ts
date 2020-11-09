import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IServiceTemplate } from '../../core/interfaces/iServiceTemplate';
import { DynamicMaidComponent } from './dynamics/dynamic-maid/dynamic-maid.component';


const API_URL = 'http://localhost:1337';

@Injectable({ providedIn: 'root' })
export class ServicosService {
  getDynamicComponent(serviceTemplate: IServiceTemplate) {
    if (serviceTemplate.name === 'domestica') { return DynamicMaidComponent; }
  }

  constructor(private http: HttpClient) { }

  getTemplateByService(name: string) {
    return this.http.post(API_URL + '/servicestemplate/exists/', { name });
  }


}
