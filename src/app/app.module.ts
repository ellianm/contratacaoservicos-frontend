import { LoginModule } from './pages/login/login.module';
// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

// Modules Proprios
import { CoreModule } from './core/core.module';
import { RegisterModule } from './pages/register/register.module';
import { ProfileModule } from './pages/profile/profile.module';
import { ServicesModule } from './pages/services/services.module';
import { HomeModule } from './pages/home/home.module';
// Componentes Proprios (mover para módulos)
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PoModule } from '@po-ui/ng-components';
import { AppDateAdapter, APP_DATE_FORMATS } from './core/format-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    RegisterModule,
    ServicesModule,
    ProfileModule,
    HomeModule,
    LoginModule,
    PoModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
