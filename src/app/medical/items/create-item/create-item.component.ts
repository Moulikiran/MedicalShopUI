import { Component, OnInit } from '@angular/core';
import { CreateItemDto } from 'src/app/dto/Items/CreateItemdto';
import { Item } from 'src/app/models/items/Item';
import { ItemList } from 'src/app/models/items/ItemList';
import { GetAllShops } from 'src/app/models/shop/GetAllShops';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { ShopService } from 'src/app/services/shop.service';
import * as $ from "jquery";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  
  getAllShops: GetAllShops[];
  item: Item;
  showAddButton: boolean = false;
  showSubmitButton: boolean = false;
  showBillSection: boolean = false;
  showItemBillDate: boolean = true;
  successMessage: boolean = false;
  errorMessage: boolean = false;
  itemsList: Item[];
  
  constructor(private shopService: ShopService, private itemService: ItemService, private router: Router) { 
   this.item = new Item(); 
  }
  
  ngOnInit(): void {
    this.shopService.getAllShopDetails().subscribe(data => {
      this.getAllShops = data;
    });
    this.getItems();
    console.log("Shops are" + this.getAllShops);
  }

  submitInventory(itemList: Item) {
      let createItemDtos: CreateItemDto[] = [];
      itemList.items.forEach(item => {
        let createItemDto: CreateItemDto = new CreateItemDto();
        createItemDto.billNo = itemList.billNumber;
        createItemDto.shopId = itemList.itemShopId;
        createItemDto.itemName = item.itemname;
        createItemDto.itemPower = item.itempowerinfo;
        createItemDto.itemPurchasedQuantity = item.itemquantity;
        createItemDto.itemMrp = item.itemmrp;
        createItemDto.itemPurchasedAmount = item.itempurchasedamount;
        createItemDto.itemBatchNo = item.batchno;
        createItemDto.itemDiscountPercentage = item.itemdispercent;
        createItemDto.itemCgstPercentage = item.cgstpercent;
        createItemDto.itemSgstPercentage = item.sgstpercent;
        createItemDto.itemExpiryDate = item.expiredate;
        createItemDto.itemManfacturerDate = item.manfacturedDate;
        createItemDto.itemManfacturerName = item.manfacturerName;
        if(createItemDto.itemPurchasedDate !== undefined) {
          createItemDto.itemPurchasedDate = item.itempurchasedDate;
        } else {
          createItemDto.itemPurchasedDate = itemList.billDate;
        }
        createItemDtos.push(createItemDto);
      });
      this.itemService.saveInventory(createItemDtos).subscribe(
        () => {
          this.successMessage = true;
          setTimeout(() => { 
            this.successMessage = false;
            this.router.navigate(['/item']);
          }, 2000);
          
      }, (error) => {
          this.errorMessage = true;
          setTimeout(() => { this.errorMessage = false; }, 3000);
      });
  }

  handleShopSelection() {
    if(this.item.itemShopId != null) {
      this.showAddButton = true;
      this.showBillSection = true;
      this.item.items = [];
    }
  }

  handleBillDateChangeEvent(event: any) {
    event.target.value === '' ?  this.showItemBillDate = true: this.showItemBillDate = false;
  
  }

  addItem() {
    if(this.item != undefined)
      this.item.items.push(new ItemList());
      this.showSubmitButton = true;
  }

  removeItem(item: any) {
    this.item.items.splice(this.item.items.indexOf(item), 1);
    if(this.item.items.length === 0) {
      this.showSubmitButton = false;
    }
  }

  getItems() {
    this.itemsList = this.itemService.getAllItems();
  }
}
