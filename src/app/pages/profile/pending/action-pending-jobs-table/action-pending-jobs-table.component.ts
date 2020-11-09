import { MatPaginator } from '@angular/material/paginator';
import { MessageServiceResolver } from '../../../../core/utils-message/message-service.service';
import { ProfileService } from '../../profile.service';
import { IRateJob } from '../../../../core/interfaces/iRateJob';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RatejobDetailComponent } from '../../ratejob-detail/ratejob-detail.component';
import { IServiceContract } from 'src/app/core/interfaces/iServiceContract';
import { TextDialogComponent } from 'src/app/core/text-dialog/text-dialog.component';

@Component({
  selector: 'app-action-pending-jobs-table',
  templateUrl: './action-pending-jobs-table.component.html',
  styleUrls: ['./action-pending-jobs-table.component.css']
})
export class ActionPendingJobsTableComponent implements OnInit, AfterViewInit {

  @Input() dataSource: MatTableDataSource<IRateJob>;
  @Input() dataSourceHistory: MatTableDataSource<IRateJob>;
  @Input() dataSourceInProgress: MatTableDataSource<IRateJob>;
  @Input() userId: string;
  displayedColumns: string[] = ['clientName', 'dtSolicitation', 'detail', 'observation', 'value', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private profileService: ProfileService,
    private messageService: MessageServiceResolver,
    private dialog: MatDialog) { }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadData();
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.profileService.getContractedJobPending(this.userId).subscribe(
      contractedJobs => this.dataSource.data = contractedJobs,
      err => this.messageService.error('Não foi possivel carregar os dados de pendências dos contratos'));
  }

  loadDataHistory() {
    this.profileService.getContractedJobHistory(this.userId).subscribe(
      contractedJobs => this.dataSourceHistory.data = contractedJobs,
      err => this.messageService.error('Não foi possivel carregar os dados de histórico dos contratos'));
  }

  loadDataInProgress() {
    this.profileService.getContractedJobInProgress(this.userId).subscribe(
      contractedJobs => this.dataSourceInProgress.data = contractedJobs,
      err => this.messageService.error('Não foi possivel carregar os dados de contratos em progresso'));
  }

  save() {
    this.profileService.saveRateJob(this.dataSource.data).subscribe(
      () => {
        this.loadData();
        this.loadDataHistory();
        this.loadDataInProgress();
        this.messageService.success('Contratos atualizados com sucesso');
      },
      err => this.messageService.error('Não foi possível atualizar os contratos, tente novamente'));
  }

  setAction(element: IRateJob, action: boolean) {
    element.action = action;
    if (!action) {
      element.dtConclusion = new Date();
    }
  }
  showDetail(rateJob: IRateJob) {
    const dialogDetail = this.dialog.open(RatejobDetailComponent);
    dialogDetail.componentInstance.element = rateJob.client;
  }
  showObservation(element: IServiceContract) {
    const dialogText = this.dialog.open(TextDialogComponent);
    dialogText.componentInstance.element = element;
    dialogText.componentInstance.propertyName = 'observation';
    dialogText.componentInstance.title = 'Observação';
    dialogText.componentInstance.editable = false;
  }
}
