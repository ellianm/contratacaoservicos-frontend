import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IRateJob } from 'src/app/core/interfaces/iRateJob';
import { RatejobDetailComponent } from '../../ratejob-detail/ratejob-detail.component';
import { ProfileService } from '../../profile.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IServiceContract } from 'src/app/core/interfaces/iServiceContract';
import { TextDialogComponent } from 'src/app/core/text-dialog/text-dialog.component';
import { DynamicsService } from '../../config/dynamics/dynamics.service';

@Component({
  selector: 'app-in-progress-client-jobs-table',
  templateUrl: './in-progress-client-jobs-table.component.html',
  styleUrls: ['./in-progress-client-jobs-table.component.css']
})
export class InProgressClientJobsTableComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<IRateJob>;
  displayedColumns: string[] = ['providerName', 'dtSolicitation', 'detail', 'observation', 'value'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() userId: string;

  constructor(private profileService: ProfileService,
    private dialog: MatDialog,
    private dynamicsService: DynamicsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadData();
    this.dataSource.paginator = this.paginator;
  }

  showDetail(rateJob: IRateJob) {
    const dialogDetail = this.dialog.open(RatejobDetailComponent);
    dialogDetail.componentInstance.element = rateJob.provider;
  }

  loadData() {
    this.profileService
      .getContractedJobInProgressClient(this.userId)
      .subscribe(rateJobList => this.dataSource.data = rateJobList);
  }

  showObservation(element: IServiceContract) {
    const dialogText = this.dialog.open(TextDialogComponent);
    dialogText.componentInstance.element = element;
    dialogText.componentInstance.propertyName = 'observation';
    dialogText.componentInstance.title = 'Observação';
    dialogText.componentInstance.editable = false;
  }

  saveObservation() {

  }
  showObject(element: IServiceContract) {
    if (element.object) {
      this.profileService
        .getDynamicConfig(element.serviceName)
        .subscribe(service => this.dynamicsService.getDynamicObjectDialog(service, element.object));
    }
  }

}
