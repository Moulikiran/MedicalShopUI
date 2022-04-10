import { ItemList } from "./ItemList";

export class Item {
    itemShopId: string;
    billNumber: string;
    billDate: Date;
    itemname: string;
    items: ItemList[];
}