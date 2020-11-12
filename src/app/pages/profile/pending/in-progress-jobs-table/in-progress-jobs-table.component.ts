
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MessageServiceResolver } from './../../../../core/utils-message/message-service.service';
import { IRateJob } from '../../../../core/interfaces/iRateJob';
import { ProfileService } from '../../profile.service';
import { MatDialog } from '@angular/material/dialog';
import { RatejobDetailComponent } from '../../ratejob-detail/ratejob-detail.component';
import { IServiceContract } from 'src/app/core/interfaces/iServiceContract';
import { TextDialogComponent } from 'src/app/core/text-dialog/text-dialog.component';
import { DynamicsService } from '../../config/dynamics/dynamics.service';

@Component({
  selector: 'app-in-progress-jobs-table',
  templateUrl: './in-progress-jobs-table.component.html',
  styleUrls: ['./in-progress-jobs-table.component.css']
})
export class InProgressJobsTableComponent implements OnInit, AfterViewInit {

  @Input() dataSource: MatTableDataSource<IRateJob>;
  @Input() dataSourceHistory: MatTableDataSource<IRateJob>;
  displayedColumns: string[] = ['clientName', 'dtSolicitation', 'detail', 'observation', 'value', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() userId: string;

  constructor(private profileService: ProfileService,
    private messageService: MessageServiceResolver,
    private dialog: MatDialog,
    private dynamicsService: DynamicsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadData();
    this.dataSource.paginator = this.paginator;
  }

  done(element: IRateJob) {
    element.dtConclusion = new Date();
  }

  showDetail(rateJob: IRateJob) {
    const dialogDetail = this.dialog.open(RatejobDetailComponent);
    dialogDetail.componentInstance.element = rateJob.client;
  }

  save() {
    this.profileService.saveRateJob(this.dataSource.data)
      .subscribe(() => { }, err => this.messageService.error('Não foi possível atualizar as avaliações, tente novamente'));
    this.loadData();
  }

  loadData() {
    this.profileService
      .getContractedJobInProgress(this.userId)
      .subscribe(rateJobList => this.dataSource.data = rateJobList);
  }

  showObservation(element: IServiceContract) {
    const dialogText = this.dialog.open(TextDialogComponent);
    dialogText.componentInstance.element = element;
    dialogText.componentInstance.propertyName = 'observation';
    dialogText.componentInstance.title = 'Observação';
    dialogText.componentInstance.editable = false;
  }
  showObject(element: IServiceContract) {
    if (element.object) {
      this.profileService
        .getDynamicConfig(element.serviceName)
        .subscribe(service => this.dynamicsService.getDynamicObjectDialog(service, element.object));
    }
  }


}
