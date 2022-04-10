import { Component, Inject, OnInit } from '@angular/core';
import { CreateShop } from 'src/app/models/shop/CreateShop';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent implements OnInit {

  shopDetails: CreateShop;
  
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopDetails = new CreateShop();
  }

  createShop() {
    console.log("----------"+this.shopDetails);
    this.shopService.createShop(this.shopDetails);
  }
}
