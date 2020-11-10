import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { IUserJob } from '../../../../core/interfaces/iUserJob';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-dynamic-config-resolver',
  templateUrl: './dynamic-config-resolver.component.html',
  styleUrls: ['./dynamic-config-resolver.component.css']
})
// código oculto
export class DynamicConfigResolverComponent implements OnInit {

  hasDynamicConfig: boolean;
  @Input() userJob: IUserJob;
  @ViewChild('dynamicConfig', { read: ViewContainerRef }) dynamicConfig: ViewContainerRef;

  constructor(
    private profileService: ProfileService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.getDynamicConfig(this.userJob.jobName);
  }
  getDynamicConfig(job: string) {
    this.profileService.getDynamicConfig(job).subscribe(serviceTemplate => {
      this.hasDynamicConfig = true;
      const resolver = this.componentFactoryResolver.resolveComponentFactory(
        this.profileService.getDynamicConfigComponent(serviceTemplate)
      );
      let component = this.dynamicConfig.createComponent(resolver);
      component.instance.user = this.userJob.user;
    });
  }
}
