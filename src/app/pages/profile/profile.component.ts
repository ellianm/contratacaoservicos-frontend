
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Component, OnInit, QueryList, ViewChildren
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../../core/classes/user';
import { UserService } from './../../core/user/user.service';
import { ProfileService } from './profile.service';
import { IRateJob } from '../../core/interfaces/iRateJob';
import { CpfCnpjValidator } from 'src/app/core/validators/cpf-cnpj.validator.service';
import { IUserJob } from '../../core/interfaces/iUserJob';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userMenus: string[] = ['Home', 'Configurações', 'Historico'];
  dataSourceRateJob = new MatTableDataSource<IRateJob>();
  dataSourceRateJobHistory = new MatTableDataSource<IRateJob>();
  dataSourceContractedJobs = new MatTableDataSource<IRateJob>();
  dataSourceContractedJobsHistory = new MatTableDataSource<IRateJob>();
  dataSourceProgress = new MatTableDataSource<IRateJob>();
  dataSourceProgressClient = new MatTableDataSource<IRateJob>();
  configureForm: FormGroup;
  user: User;
  hasDynamicConfig: boolean;
  jobList: IUserJob[];
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private cpfCnpjValidator: CpfCnpjValidator) { }

  ngOnInit(): void {
    this.user = new User;
    this.userService.getUserCompleto().subscribe(user => {
      this.setConfigureForm(user);
      this.profileService
        .getUserJobs(this.user.id.toString())
        .subscribe(userJob => { this.jobList = userJob });
    });
  }
  setConfigureForm(user: any) {
    this.user = user;
    this.configureForm = this.formBuilder.group({
      id: [user.id],
      email: [user.email,
      [
        Validators.required,
        Validators.email
      ]
      ],
      name: [user.name, [Validators.required]],
      userName: [user.userName,
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      cep: [user.cep, Validators.required],
      uf: [user.uf, Validators.required],
      cidade: [user.cidade, Validators.required],
      rua: [user.rua, Validators.required],
      numero: [user.numero, Validators.required],
      cnpjf: [user.cnpjf, [Validators.required, this.cpfCnpjValidator.isValidCnpjf()]],
      telefone: [user.telefone],
      rg: [user.rg],
      sexo: [user.sexo, Validators.required],
      dtNascimento: [user.dtNascimento, Validators.required],
      funcao: [user.funcao, Validators.required],
      bairro: [user.bairro, Validators.required],
      confirmarSenha: ['', Validators.required],
      isPrestador: [user.isPrestador, Validators.required]
    });
  }
}
