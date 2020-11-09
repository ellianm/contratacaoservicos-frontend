import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DynamicConfig } from 'src/app/core/interfaces/IDynamicConfig';

@Injectable({ providedIn: 'root' })
export class DynamicsService {

    constructor(private http: HttpClient) { }
    saveDynamicConfig(URL: string, value: DynamicConfig) {
      if (value.id) return this.http.put(environment.API_URL+URL+'/'+value.id, value); 
      return this.http.post(environment.API_URL+URL, value);   
    }
    getDynamicConfig(URL:string, userId: number) {
      return this.http.get(environment.API_URL+URL+'/user/'+userId);
    }
}