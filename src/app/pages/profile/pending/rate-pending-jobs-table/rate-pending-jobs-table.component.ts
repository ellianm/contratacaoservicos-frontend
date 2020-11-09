import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';

import { MessageServiceResolver } from '../../../../core/utils-message/message-service.service';
import { ProfileService } from '../../profile.service';
import { IRateJob } from '../../../../core/interfaces/iRateJob';
import { RatejobDetailComponent } from '../../ratejob-detail/ratejob-detail.component';
import { IServiceContract } from 'src/app/core/interfaces/iServiceContract';
import { TextDialogComponent } from 'src/app/core/text-dialog/text-dialog.component';
@Component({
  selector: 'app-rate-pending-jobs-table',
  templateUrl: './rate-pending-jobs-table.component.html',
  styleUrls: ['./rate-pending-jobs-table.component.css']
})
export class RatePendingJobsTableComponent implements OnInit, AfterViewInit {

  @Input() dataSource: MatTableDataSource<IRateJob>;
  @Input() dataSourceHistory: MatTableDataSource<IRateJob>;
  displayedColumns: string[] = ['provider', 'serviceName', 'dtConclusion', 'value', 'avaliation',  'observation','detail'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() userId: string;

  constructor(
    private profileService: ProfileService,
    private messageService: MessageServiceResolver,
    private dialog: MatDialog) { }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loadData();
    this.dataSourceHistory.paginator = this.paginator;
  }

  loadData() {
    this.profileService.getRateJobPending(this.userId).subscribe(
      rateJobs => this.dataSource.data = rateJobs);
  }
  loadDataHistory() {
    this.dataSourceHistory.data = [];
    this.profileService
      .getRateJobHistory(this.userId).subscribe(
        rateJobsHistory => this.dataSourceHistory.data = rateJobsHistory
      );
  }

  showDetail(rateJob: IRateJob) {
    const dialogDetail = this.dialog.open(RatejobDetailComponent);
    dialogDetail.componentInstance.element = rateJob.provider;
  }

  save() {
    this.profileService.saveRateJob(this.dataSource.data).subscribe(
      () => {
        this.loadData();
        this.messageService.success('Avaliações atualizadas com sucesso');
      },
      err => this.messageService.error('Não foi possível atualizar as avaliações, tente novamente'));
  }
  showObservation(element: IServiceContract) {
    const dialogText = this.dialog.open(TextDialogComponent);
    dialogText.componentInstance.element = element;
    dialogText.componentInstance.propertyName = 'observation';
    dialogText.componentInstance.title = 'Observação';
    dialogText.componentInstance.editable = false;
  }


}
