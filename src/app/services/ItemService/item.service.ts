import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateItemDto } from 'src/app/dto/Items/CreateItemdto';
import { Item } from 'src/app/models/items/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl: string = "http://localhost:8080/api/v1/item";
  constructor(private httpClient: HttpClient) { }

  getAllItems(): Item[] {
      this.httpClient.get<Item>(this.baseUrl + "/getAllItems").subscribe(data => {
        return data;
      });

      return [];
  }

  saveInventory(saveItems: CreateItemDto[]): Observable<any> {
    console.log(JSON.stringify(saveItems));
    return this.httpClient.post(this.baseUrl + "/saveItem", saveItems);
  }
}
