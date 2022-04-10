import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { ShopComponent } from './shop/shop.component';
import { CreateShopComponent } from './shop/create-shop/create-shop.component';
import { CreateItemComponent } from './items/create-item/create-item.component';


@NgModule({
  declarations: [
    ShopComponent,
    CreateShopComponent,
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    MedicalRoutingModule
  ]
})
export class MedicalModule { }
