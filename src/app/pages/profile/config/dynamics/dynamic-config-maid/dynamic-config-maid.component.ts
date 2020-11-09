import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigMaid } from './configMaid';
import { DynamicsService } from '../dynamics.service';
import { MessageServiceResolver } from 'src/app/core/utils-message/message-service.service';
import { IClient } from 'src/app/core/interfaces/iClient';

@Component({
  selector: 'app-dynamic-config-maid',
  templateUrl: './dynamic-config-maid.component.html',
  styleUrls: ['./dynamic-config-maid.component.css']
})
export class DynamicConfigMaidComponent implements OnInit {

  @Input() user: IClient;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private dynamicsService: DynamicsService,
    private messageService: MessageServiceResolver) { }

  ngOnInit(): void {
    this.createForm();
    this.loadData();
  }

  createForm() {
    this.form = this.formBuilder.group(
      {
        id:[''],
        smallSize: ['', Validators.required],
        mediumSize: ['', Validators.required],
        largeSize: ['', Validators.required],
        smallValue: ['', Validators.required],
        mediumValue: ['', Validators.required],
        largeValue: ['', Validators.required],
        cleaningLight: ['', Validators.required],
        cleaningNormal: ['', Validators.required],
        cleaningHeavy: ['', Validators.required]
      }
    );
  }

  configToForm(config: ConfigMaid) {
    this.form.get('smallSize').setValue(config.smallSize);
    this.form.get('mediumSize').setValue(config.mediumSize);
    this.form.get('largeSize').setValue(config.largeSize);
    this.form.get('smallValue').setValue(config.smallValue);
    this.form.get('mediumValue').setValue(config.mediumValue);
    this.form.get('largeValue').setValue(config.largeValue);
    this.form.get('cleaningLight').setValue(config.cleaningLight);
    this.form.get('cleaningNormal').setValue(config.cleaningNormal);
    this.form.get('cleaningHeavy').setValue(config.cleaningHeavy);
    this.form.get('id').setValue(config.id);
  }

  loadData() {
    this.dynamicsService.getDynamicConfig('/configMaid', this.user.id).subscribe(
      (config) => {
        this.configToForm(config[0]);
      },
      err => {
        if (err.status != 404) {
          this.messageService.error('Não foi possível carregar os dados da configuração de valores')
        }
      }
    );
  }

  save() {
    let config = this.form.getRawValue() as ConfigMaid;
    config.user = this.user;
    this.dynamicsService.saveDynamicConfig('/configMaid', config).subscribe(
      () => {
        this.messageService.success('Configurações salvas com sucesso!')
      },
      err => {
        this.messageService.error('Não foi possível salvar as configurações, tente novamente!')
      }
    )

  }

}
