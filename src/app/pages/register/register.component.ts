import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as cep from 'cep-promise';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'

import { User } from '../../core/classes/user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { RegisterService } from './register.service';
import { TermosDeUsoePrivacidadeComponent } from 'src/app/pages/register/termos-de-usoe-privacidade/termos-de-usoe-privacidade.component';
import { CpfCnpjValidator } from '../../core/validators/cpf-cnpj.validator.service';
import { MessageServiceResolver } from 'src/app/core/utils-message/message-service.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserNotTakenValidatorService, RegisterService]
})

export class RegisterComponent implements OnInit {

  sexoOptions = ['Masculino', 'Feminino', 'Outro'];
  form: FormGroup;
  @ViewChild('userInput') userInput: ElementRef<HTMLInputElement>;
  user: User;
  mostrarMsg: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private cpfcnpjValidator: CpfCnpjValidator,
    private registerService: RegisterService,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageServiceResolver) { }

  ngOnInit(): void {

    this.user = new User();
    this.form = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ],
        this.userNotTakenValidatorService.checkEmailTaken()
      ],
      name: ['',
        [
          Validators.required
        ]
      ],
      userName: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      cep: ['', Validators.required],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      cnpjf: ['',
        [
          Validators.required,
          this.cpfcnpjValidator.isValidCnpjf()
        ]],
      telefone: [''],
      rg: [''],
      sexo: ['', Validators.required],
      dtNascimento: ['', Validators.required],
      funcao: ['', Validators.required],
      bairro: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
      isPrestador: [false, Validators.required],
      aceitouTermos: ['']
    });
  }

  clearCep() {
    this.form.get('rua').setValue('');
    this.form.get('bairro').setValue('');
    this.form.get('cidade').setValue('');
    this.form.get('uf').setValue('');
  }

  openDialog() {
    const dialogRef = this.dialog.open(TermosDeUsoePrivacidadeComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.form.get('aceitouTermos').setValue(result);
    });

  }
  private setDadosCep(pessoa: User) {
    this.form.get('rua').setValue(pessoa.rua);
    this.form.get('bairro').setValue(pessoa.bairro);
    this.form.get('cidade').setValue(pessoa.cidade);
    this.form.get('uf').setValue(pessoa.uf);
  }

  isCPF(): boolean {
    return this.form.get('cnpjf').value == null ? true :
      this.form.get('cnpjf').value.length < 12 ? true : false;
  }

  getMaskCnpjf() {
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }

  signup() {
    const newUser = this.form.getRawValue();
    delete newUser.confirmarSenha;
    delete newUser.aceitouTermos;
    this.registerService
      .signup(newUser)
      .subscribe(
        () => {
          this.messageService.success('Cadastro realizado com sucesso!');
          this.router.navigate(['']);
        },
        err => this.messageService.error('Não foi possível realizar o cadastro, tente novamente!')
      );
  }
  async pesquisaCep() {
    const nrocep = this.form.get('cep').value.replace(/\D/g, '');
    if (nrocep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(nrocep)) {
        const pessoa = new User();
        await cep(nrocep).then((cep) => {
          pessoa.rua = cep.street;
          pessoa.bairro = cep.neighborhood;
          pessoa.uf = cep.state;
          pessoa.cidade = cep.city;
        });
        this.setDadosCep(pessoa);
      } else {
        this.clearCep();
      }
    } else {
      this.clearCep();
    }
  }

}


