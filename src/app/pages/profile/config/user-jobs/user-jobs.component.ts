import { Component, OnInit, Input, Output } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { ProfileService } from '../../profile.service';
import { MessageServiceResolver } from 'src/app/core/utils-message/message-service.service';
import { IUserJob } from '../../../../core/interfaces/iUserJob';
import { IProvider } from '../../../../core/interfaces/iProvider';


@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.css']
})
export class UserJobsComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() user: IProvider;
  @Input() jobList: IUserJob[];

  constructor(
    private profileService: ProfileService,
    private messageService: MessageServiceResolver) { }

  ngOnInit(): void {}

  loadJobs() {
    this.profileService.getUserJobs(this.user.id.toString()).subscribe(userJob => {
      this.jobList = userJob;
    });
  }

  add(event: MatChipInputEvent): void {
    const found = this.jobList.filter(JobIndex => JobIndex.jobName === event.value);
    if (!found.length) {
      this.jobList.push({jobName: event.value.trim(), id:null, user: this.user, value: null, observation:null});
      if (event.input) {
        event.input.value = '';
      }
      this.profileService
        .saveUserJobs(this.jobList)
        .subscribe(
        () => { this.loadJobs() }
        )
    } else {
      this.messageService.warning('Esta atribuição já foi informada.');
    }

  }
  removeJob(userJob: IUserJob): void {
    const index = this.jobList.indexOf(userJob);
    if (index >= 0) {
      this.jobList.splice(index, 1);
    }
    if (userJob.id) {
      this.profileService.removeJob(userJob)
        .subscribe(
          () => { },
          err => {
            this.messageService.error('Não foi possível remover a atribuição');
            this.loadJobs();
          });
    }
  }

}
