import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { IRateJob } from '../../../../core/interfaces/iRateJob';
import { ProfileService } from './../../profile.service';
import { RatejobDetailComponent } from '../../ratejob-detail/ratejob-detail.component';
import { IServiceContract } from 'src/app/core/interfaces/iServiceContract';
import { TextDialogComponent } from 'src/app/core/text-dialog/text-dialog.component';

@Component({
  selector: 'app-history-rate-contract-table',
  templateUrl: './history-rate-contract-table.component.html',
  styleUrls: ['./history-rate-contract-table.component.css']
})
export class HistoryRateContractTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<IRateJob>;
  @Input() userId: string;
  displayedColumns: string[] = ['provider', 'serviceName', 'dtConclusion', 'value',
                                'avaliation','avaliationObs', 'observation', 'detail'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private profileService: ProfileService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadData();
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.dataSource.data = [];
    this.profileService
      .getRateJobHistory(this.userId).subscribe(
        rateJobsHistory => this.dataSource.data = rateJobsHistory
      );
  }
  
  showDetail(rateJob: IRateJob) {
    const dialogDetail = this.dialog.open(RatejobDetailComponent);
    dialogDetail.componentInstance.element = rateJob.provider;
  }
  
  showObservation(element: IServiceContract) {
    const dialogText = this.dialog.open(TextDialogComponent);
    dialogText.componentInstance.element = element;
    dialogText.componentInstance.propertyName = 'observation';
    dialogText.componentInstance.title = 'Observação';
    dialogText.componentInstance.editable = false;
  }

  showAvaliationObs(element: IServiceContract) {
    const dialogText = this.dialog.open(TextDialogComponent);
    dialogText.componentInstance.element = element;
    dialogText.componentInstance.propertyName = 'avaliationObs';
    dialogText.componentInstance.title = 'Observação Avaliação';
    dialogText.componentInstance.editable = false;
  }

}
