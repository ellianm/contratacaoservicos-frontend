
import { MatDialogModule } from '@angular/material/dialog';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Material
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Proprios
import { CoreModule } from 'src/app/core/core.module';
// Ngx
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AvatarModule } from 'ngx-avatar';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
// Po-UI
import { PoAvatarModule } from '@po-ui/ng-components';
import { PoWidgetModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';

// Componentes do módulo
import { ProfileComponent } from './profile.component';
import { RatejobDetailComponent } from './ratejob-detail/ratejob-detail.component';
import { UserCepComponent } from './config/user-cep/user-cep.component';
import { InProgressJobsTableComponent } from './pending/in-progress-jobs-table/in-progress-jobs-table.component';
import { RatePendingJobsTableComponent } from './pending/rate-pending-jobs-table/rate-pending-jobs-table.component';
import { ActionPendingJobsTableComponent } from './pending/action-pending-jobs-table/action-pending-jobs-table.component';
import { HistoryRateContractTableComponent } from './history/history-rate-contract-table/history-rate-contract-table.component';
import { HistoryActionJobsTableComponent } from './history/history-action-jobs-table/history-action-jobs-table.component';
import { UserJobsComponent } from './config/user-jobs/user-jobs.component';
import { DynamicConfigResolverComponent } from './config/dynamic-config-resolver/dynamic-config-resolver.component';
import { DynamicConfigMaidComponent } from './config/dynamics/dynamic-config-maid/dynamic-config-maid.component';
import { InProgressClientJobsTableComponent } from './pending/in-progress-client-jobs-table/in-progress-client-jobs-table.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserDataFormComponent } from './config/user-data-form/user-data-form.component';





@NgModule({
  declarations: [
    ProfileComponent,
    RatejobDetailComponent,
    UserCepComponent,
    InProgressJobsTableComponent,
    RatePendingJobsTableComponent,
    ActionPendingJobsTableComponent,
    HistoryRateContractTableComponent,
    HistoryActionJobsTableComponent,
    UserJobsComponent,
    DynamicConfigResolverComponent,
    DynamicConfigMaidComponent,
    InProgressClientJobsTableComponent,
    AvatarComponent,
    UserDataFormComponent
  ],
  exports: [
    ProfileComponent,
    RatejobDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatChipsModule,
    NgxMaskModule.forRoot(),
    PoAvatarModule,
    PoWidgetModule,
    PoModalModule,
    MatFormFieldModule,
    MatInputModule,
    AvatarModule
  ]
})
export class ProfileModule { }
