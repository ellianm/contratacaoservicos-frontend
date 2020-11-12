import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { DynamicMaidDialogComponent } from 'src/app/pages/profile/dynamic-maid-dialog/dynamic-maid-dialog.component'
import { DynamicConfig } from 'src/app/core/interfaces/IDynamicConfig';
import { IServiceTemplate } from 'src/app/core/interfaces/iServiceTemplate';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class DynamicsService {

  constructor(private http: HttpClient,
    private dialog: MatDialog) { }
  saveDynamicConfig(URL: string, value: DynamicConfig) {
    if (value.id) return this.http.put(environment.API_URL + URL + '/' + value.id, value);
    delete value.id;
    return this.http.post(environment.API_URL + URL, value);
  }
  getDynamicConfig(URL: string, userId: number) {
    return this.http.get(environment.API_URL + URL + '/user/' + userId);
  }
  getDynamicObjectDialog(service: IServiceTemplate, object: any) {
    let dialog;
    if (service.name == 'domestica') dialog = this.dialog.open(DynamicMaidDialogComponent)
    if (dialog) dialog.componentInstance['object'] = object;
    }
  }