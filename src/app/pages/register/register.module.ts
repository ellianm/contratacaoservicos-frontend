// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// Proprios
import { CoreModule } from 'src/app/core/core.module';
// Ngx
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
// Componentes do módulo
import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { TermosDeUsoePrivacidadeComponent } from './termos-de-usoe-privacidade/termos-de-usoe-privacidade.component';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { PoCalendarModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    RegisterComponent,
    TermosDeUsoePrivacidadeComponent],
  exports: [
    RegisterComponent,
    TermosDeUsoePrivacidadeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    PoCalendarModule
  ],
  providers: [UserNotTakenValidatorService, RegisterService]
})
export class RegisterModule { }
