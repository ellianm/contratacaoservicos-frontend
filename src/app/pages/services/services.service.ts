import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IServiceTemplate } from '../../core/interfaces/iServiceTemplate';
import { DynamicMaidComponent } from './dynamics/dynamic-maid/dynamic-maid.component';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ServicosService {
  getDynamicComponent(serviceTemplate: IServiceTemplate) {
    if (serviceTemplate.name === 'domestica') { return DynamicMaidComponent; }
  }

  constructor(private http: HttpClient) { }

  getTemplateByService(name: string) {
    return this.http.post(environment.API_URL + '/servicestemplate/exists/', { name });
  }


}
