import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Proprios
import { CoreModule } from 'src/app/core/core.module';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

//PrimeNG
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';


// Componentes do módulo
import { ServicesComponent } from './services.component';
import { ServicesResultComponent } from './services-result/services-result.component';
import { LastAvaliationsComponent } from './services-result/last-avaliations/last-avaliations.component';
import { DynamicMaidComponent } from './dynamics/dynamic-maid/dynamic-maid.component';



@NgModule({
  declarations: [
    ServicesComponent,
    ServicesResultComponent,
    LastAvaliationsComponent,
    DynamicMaidComponent
  ],
  exports: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ToastModule,
    ButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ServicesModule { }
