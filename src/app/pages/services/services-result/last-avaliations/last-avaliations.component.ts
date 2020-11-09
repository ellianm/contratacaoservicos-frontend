
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, Input } from '@angular/core';

import { IRateJob } from '../../../../core/interfaces/iRateJob';
import { ProfileService } from '../../../profile/profile.service';

@Component({
  selector: 'app-last-avaliations',
  templateUrl: './last-avaliations.component.html',
  styleUrls: ['./last-avaliations.component.css']
})
export class LastAvaliationsComponent implements OnInit {

  dataSource = new MatTableDataSource<IRateJob>();
  @Input() userId: string;
  @Input() serviceName: string;
  displayedColumns: string[] = ['observation', 'avaliation'];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.profileService.getRateJobHistoryLimited(this.userId, this.serviceName)
      .subscribe(rateJobs => this.dataSource.data = rateJobs);
  }

}
