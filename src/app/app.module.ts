import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicalRoutingModule } from './medical/medical-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateShopComponent } from './medical/shop/create-shop/create-shop.component';
import { CreateItemComponent } from './medical/items/create-item/create-item.component';
import { CustommodalComponent } from './modals/custommodal/custommodal.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateShopComponent,
    CreateItemComponent,
    CustommodalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MedicalRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
