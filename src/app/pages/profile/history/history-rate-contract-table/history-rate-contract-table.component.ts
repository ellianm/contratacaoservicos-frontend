import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { IRateJob } from '../../../../core/interfaces/iRateJob';
import { ProfileService } from './../../profile.service';
import { RatejobDetailComponent } from '../../ratejob-detail/ratejob-detail.component';

@Component({
  selector: 'app-history-rate-contract-table',
  templateUrl: './history-rate-contract-table.component.html',
  styleUrls: ['./history-rate-contract-table.component.css']
})
export class HistoryRateContractTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<IRateJob>;
  @Input() userId: string;
  displayedColumns: string[] = ['provider', 'serviceName', 'dtConclusion', 'value', 'avaliation', 'detail'];
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


}
