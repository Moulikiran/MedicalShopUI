import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateShop} from '../models/shop/CreateShop';
import { GetAllShops } from '../models/shop/GetAllShops';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl: string = "http://localhost:8080/api/v1/shopdetails";
  private getAllShops: GetAllShops[];

  constructor(public httpClient: HttpClient) { }

  
  createShop(shopDetails: CreateShop)
  {
      this.httpClient.post(this.baseUrl + "/createNewShop", shopDetails).subscribe(data=> {
        console.log(data);
      });
  }

  getAllShopDetails():  Observable<GetAllShops[]> {
    
    return this.httpClient.get<GetAllShops[]>(this.baseUrl + "/getAllShops");
    
  }
}
