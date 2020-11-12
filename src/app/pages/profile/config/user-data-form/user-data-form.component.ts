import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as cep from 'cep-promise';

import { MessageServiceResolver } from 'src/app/core/utils-message/message-service.service';
import { User } from 'src/app/core/classes/user';
import { ProfileService } from '../../profile.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent implements OnInit {

  sexOptions = ['Masculino', 'Feminino', 'Outro'];
  @Input() form: FormGroup;

  constructor(private profileService: ProfileService, private messageService: MessageServiceResolver, private userService: UserService) { }

  ngOnInit(): void {
  }

  clearCep() {
    this.form.get('rua').setValue('');
    this.form.get('bairro').setValue('');
    this.form.get('uf').setValue('');
    this.form.get('cidade').setValue('');
  }

  async pesquisaCep() {
    const nrocep = this.form.get('cep').value.replace(/\D/g, '');
    if (nrocep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(nrocep)) {
        const pessoa = new User();
        await cep(nrocep).then(cepReturn => {
          pessoa.rua = cepReturn.street;
          pessoa.bairro = cepReturn.neighborhood;
          pessoa.uf = cepReturn.state;
          pessoa.cidade = cepReturn.city;
        });
        this.form.get('rua').setValue(pessoa.rua);
        this.form.get('bairro').setValue(pessoa.bairro);
        this.form.get('uf').setValue(pessoa.uf);
        this.form.get('cidade').setValue(pessoa.cidade);
      } else {
        this.clearCep();
      }
    } else {
      this.clearCep();
    }
  }

  save() {
    const user = this.form.getRawValue();
    delete user.confirmarSenha;
    this.profileService
      .saveUpdate(user)
      .subscribe(
        () => {
          this.messageService.success('Alteração realizada com sucesso');
          this.userService.setCep(user.cep);
        },
        () => this.messageService.error('Não foi possível alterar os dados cadastrais')
      );
  }

  isCPF(): boolean {
    return this.form.get('cnpjf').value == null ? true :
      this.form.get('cnpjf').value.length < 12 ? true : false;
  }

  getMaskCnpjf() {
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }

}
