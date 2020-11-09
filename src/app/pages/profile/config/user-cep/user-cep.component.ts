
import { Component, OnInit, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import * as cep from 'cep-promise';

import { IUserCep } from '../../../../core/interfaces/iUserCep';
import { MessageServiceResolver } from '../../../../core/utils-message/message-service.service';
import { ProfileService } from '../../profile.service';


import { User } from '../../../../core/classes/user';

@Component({
  selector: 'app-user-cep',
  templateUrl: './user-cep.component.html',
  styleUrls: ['./user-cep.component.css']
})
export class UserCepComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  cepList: IUserCep[];
  @Input() user: User;

  constructor(
    private profileService: ProfileService,
    private messageService: MessageServiceResolver) { }

  ngOnInit(): void {
    this.loadCeps();
  }

  loadCeps() {
    this.profileService.getUserCeps(this.user.id.toString()).subscribe(userCep => {
      this.cepList = userCep;
    });
  }

  add(event: MatChipInputEvent): void {
    const value = event.value.replace(/[^0-9]/g, '');
    cep(event.value).then(cepReturn => {
      if ((value || '').trim()) {
        const found = this.cepList.filter(cepIndex => cepIndex.cityName === cepReturn.city + ' - ' + cepReturn.state);
        if (!found.length) {
          this.cepList.push({ cep: value.trim(), user: this.user, id: null, cityName: cepReturn.city + ' - ' + cepReturn.state });
          if (event.input) {
            event.input.value = '';
          }
          this.profileService
            .saveUserCeps(this.cepList)
            .subscribe(() => {
              this.loadCeps();
            });
        } else {
          this.messageService.warning('Esta cidade já foi informada.');
        }
      }

    });
  }

  removeCep(userCep: IUserCep): void {
    const index = this.cepList.indexOf(userCep);

    if (index >= 0) {
      this.cepList.splice(index, 1);
    }
    if (userCep.id) {
      this.profileService.removeCep(userCep)
        .subscribe(
          () => { },
          err => {
            this.messageService.error('Não foi possível remover o CEP');
            this.profileService.getUserCeps(this.user.id.toString()).subscribe(userCepReturn => {
              this.cepList = userCepReturn;
            });
          });
    }
  }
}
