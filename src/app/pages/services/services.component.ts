import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageServiceResolver } from '../../core/utils-message/message-service.service';
import { UserService } from 'src/app/core/user/user.service';
import { IServiceTemplate } from '../../core/interfaces/iServiceTemplate';
import { ServicosService } from './services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})


export class ServicesComponent implements OnInit {
  name: string;
  validService = false;
  serviceTemplate: IServiceTemplate;
  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  dynamicComponent: ViewContainerRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicesService: ServicosService,
    private userService: UserService,
    private router: Router,
    private messageService: MessageServiceResolver,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    if (!this.userService.isLogged()) {
      this.router.navigate(['login']);
    }
    if (this.activatedRoute.snapshot.params.name) {
      this.getFormByService(this.activatedRoute.snapshot.params.name);
    }
  }

  loadSearch() {
    this.router.navigate(
      ['servicesResult', { serviceName: this.name, dynamic: false }]);
  }

  getFormByService(name: string) {
    this.servicesService.getTemplateByService(name).subscribe(
      (service: IServiceTemplate) => {
        this.serviceTemplate = service;
        this.validService = true;
        const resolver = this.componentFactoryResolver.resolveComponentFactory(
          this.servicesService.getDynamicComponent(this.serviceTemplate)
        );
        this.dynamicComponent.createComponent(resolver);
      },
      err => {
        if (err.status === 404) {
          this.name = name;
          this.loadSearch();
        } else {
          this.messageService
            .error('Não foi possível realizar a pesquisa de serviços, tente novamente');
        }
      }
    );
  }

  servicesChange() {
    this.getFormByService(this.name);
  }

}
