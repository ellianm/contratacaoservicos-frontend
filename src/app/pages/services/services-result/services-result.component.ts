import { RatejobDetailComponent } from '../../profile/ratejob-detail/ratejob-detail.component';
import { MatDialog } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { UserService } from 'src/app/core/user/user.service';
import { ServicesResultService } from './services-result.service';
import { IProvider } from '../../../core/interfaces/iProvider';
import { LastAvaliationsComponent } from './last-avaliations/last-avaliations.component';
import { MessageServiceResolver } from 'src/app/core/utils-message/message-service.service';
import { ServiceContract } from 'src/app/core/classes/serviceContract';
import { IUserJob } from 'src/app/core/interfaces/iUserJob';
import { IServiceContract } from 'src/app/core/interfaces/iServiceContract';
import { TextDialogComponent } from 'src/app/core/text-dialog/text-dialog.component';

@Component({
  selector: 'app-services-result',
  templateUrl: './services-result.component.html',
  styleUrls: ['./services-result.component.css']
})
export class ServicesResultComponent implements OnInit {
  serviceName: string;
  dynamic: boolean;
  displayedColumnsResults: string[] = ['avatar', 'rate', 'details', 'value', 'observation' ,'contract'];
  dataSourceResults = new MatTableDataSource<IProvider>();
  selectedElement: IUserJob;
  serviceContract: ServiceContract;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicesResultService: ServicesResultService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private messageServiceResolver: MessageServiceResolver) { }

  ngOnInit(): void {
    this.serviceContract = new ServiceContract();
    this.serviceName = this.activatedRoute.snapshot.params.serviceName;
    this.dynamic = this.activatedRoute.snapshot.params.dynamic;
    if (this.dynamic) {
      this.dataSourceResults.data = JSON.parse(this.activatedRoute.snapshot.params.data);
    } else {
      this.loadData();
    }
  }

  showDetail(element: IUserJob) {
    const dialogDetail = this.dialog.open(RatejobDetailComponent);
    dialogDetail.componentInstance.element = element.user;
  }

  contract(element: IUserJob) {
    this.selectedElement = element;
    this.messageServiceResolver.confirm('Confirmação', 'Deseja realmente contratar este profissional?');
  }

  onReject() {
    this.selectedElement = null;
    this.messageServiceResolver.clear();
  }

  onConfirm() {
    this.messageServiceResolver.clear();
    this.serviceContract.client.id = this.userService.userToken.id;
    this.serviceContract.provider = this.selectedElement.user;
    this.serviceContract.serviceName = this.selectedElement.jobName;
    this.serviceContract.dtSolicitation = (new Date).toString();
    this.serviceContract.observation = this.selectedElement.observation;
    this.serviceContract.value = this.selectedElement.value;
    this.serviceContract.object = JSON.parse(this.activatedRoute.snapshot.params.object);
    this.servicesResultService.contract(this.serviceContract).subscribe(
      () => {
        this.messageServiceResolver.success('Contrato realizado com sucesso!');
        this.router.navigate(['profile'])
      }
    );
  }

  viewLastAvaliations(element: IUserJob) {
    const dialogDetail = this.dialog.open(LastAvaliationsComponent);
    dialogDetail.componentInstance.userId = element.user.id.toString();
    dialogDetail.componentInstance.serviceName = element.jobName;
  }

  loadData() {
    this.servicesResultService.execute(this.serviceName).subscribe(userList => {
      this.dataSourceResults.data = userList.filter(user => user.user.id != this.userService.userToken.id);;
    });
  }

  showObservation(element: IServiceContract) {
    const dialogText = this.dialog.open(TextDialogComponent);
    dialogText.componentInstance.element = element;
    dialogText.componentInstance.propertyName = 'observation';
    dialogText.componentInstance.title = 'Observação';
    dialogText.componentInstance.editable = true;
  }

}
