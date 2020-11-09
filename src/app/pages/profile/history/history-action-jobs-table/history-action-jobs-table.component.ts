import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { IRateJob } from '../../../../core/interfaces/iRateJob';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-history-action-jobs-table',
  templateUrl: './history-action-jobs-table.component.html',
  styleUrls: ['./history-action-jobs-table.component.css']
})
export class HistoryActionJobsTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<IRateJob>;
  @Input() userId: string;
  displayedColumns: string[] = ['clientName', 'dtSolicitation', 'observation', 'value', 'action', 'avaliation'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadData();
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.dataSource.data = [];
    this.profileService
      .getContractedJobHistory(this.userId).subscribe(
        contractedJobHistory => this.dataSource.data = contractedJobHistory
      );
  }

}
