// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material
import { MatIconModule } from '@angular/material/icon';
// Modulos Proprios
import { CoreModule } from 'src/app/core/core.module';
// Componentes do Modulo
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatIconModule
  ]
})
export class LoginModule { }
