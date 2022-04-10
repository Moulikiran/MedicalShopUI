import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { ItemsComponent } from './items/items.component';
import { CreateShopComponent } from './shop/create-shop/create-shop.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path : 'shop', component : ShopComponent},
  {path : 'shop/create', component : CreateShopComponent},
  {path : 'item', component: ItemsComponent},
  {path : 'item/create', component: CreateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class MedicalRoutingModule { }
