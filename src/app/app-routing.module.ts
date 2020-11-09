import { ServicesResultComponent } from './pages/services/services-result/services-result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './core/canActivate/auth.guard';
import { NotAuthGuard } from './core/canActivate/notauth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Página Inicial | FindServices'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard],
    data: {
      title: 'Login | FindServices'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard],
    data: {
      title: 'Registrar-se | FindServices'
    }
  },
  {
    path: 'services/:name',
    component: ServicesComponent,
    data: {
      title: 'Solicitação de Serviços | FindServices'
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Solicitação de Serviços | FindServices'
    }
  },
  {
    path: 'servicesResult',
    component: ServicesResultComponent,
    data: {
      title: 'Resultado da Pesquisa | FindServices'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Perfil | FindServices'
    }
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    data: {
      title: 'Pagina não Encontrada | FindServices'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
