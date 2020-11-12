
import { MessageService } from 'primeng/api';

import { MatSnackBarModule } from '@angular/material/snack-bar';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';


// Material
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
// PrimeNG
import { ToastModule } from 'primeng/toast';


// Componentes do Modulo
import { StartBarComponent } from './start-bar/start-bar.component';
import { AvaliationStarsComponent } from './avaliation-stars/avaliation-stars.component';
import { UtilsMessageComponent } from './utils-message/utils-message.component';
import { CpfCnpjValidator } from './validators/cpf-cnpj.validator.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading-interceptor';
import { TextDialogComponent } from './text-dialog/text-dialog.component';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/core/format-datepicker';







@NgModule({
  declarations: [
    StartBarComponent,
    AvaliationStarsComponent,
    UtilsMessageComponent,
    TextDialogComponent],
  exports: [
    StartBarComponent,
    AvaliationStarsComponent,
    UtilsMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBadgeModule,
    ToastModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatOptionModule
  ],
  providers: [MessageService, CpfCnpjValidator, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }
  ]
})
export class CoreModule { }
