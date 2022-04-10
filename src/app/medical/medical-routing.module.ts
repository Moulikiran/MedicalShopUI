import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { ItemsComponent } from './items/items.component';
import { SaleComponent } from './sale/sale.component';
import { SaleentryComponent } from './sale/saleentry/saleentry.component';
import { CreateShopComponent } from './shop/create-shop/create-shop.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path : 'shop', component : ShopComponent},
  {path : 'shop/create', component : CreateShopComponent},
  {path : 'item', component: ItemsComponent},
  {path : 'item/create', component: CreateItemComponent},
  {path : 'sale', component: SaleComponent},
  {path : 'sale/entry', component: SaleentryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class MedicalRoutingModule { }
