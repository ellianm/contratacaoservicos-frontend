import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { IRateJob } from '../../../../core/interfaces/iRateJob';
import { ProfileService } from './../../profile.service';
import { IServiceContract } from 'src/app/core/interfaces/iServiceContract';
import { TextDialogComponent } from 'src/app/core/text-dialog/text-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-history-action-jobs-table',
  templateUrl: './history-action-jobs-table.component.html',
  styleUrls: ['./history-action-jobs-table.component.css']
})
export class HistoryActionJobsTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<IRateJob>;
  @Input() userId: string;
  displayedColumns: string[] = ['clientName', 'dtSolicitation', 'observation', 'value', 'action', 'avaliation', 'avaliationObs'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private profileService: ProfileService,
    private dialog: MatDialog) { }

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
