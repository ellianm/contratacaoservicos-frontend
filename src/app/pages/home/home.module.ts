// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Modulos Proprios
import { CoreModule } from 'src/app/core/core.module';
// Componentes do módulo
import { HomeComponent } from './home.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MenuComponent } from './menu/menu.component';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';
import { RedesSociaisItemComponent } from './redes-sociais-item/redes-sociais-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    ItemMenuComponent,
    MainCarouselComponent,
    MainFooterComponent,
    MenuComponent,
    RedesSociaisComponent,
    RedesSociaisItemComponent
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    ItemMenuComponent,
    MainCarouselComponent,
    MainFooterComponent,
    RedesSociaisComponent,
    RedesSociaisItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
