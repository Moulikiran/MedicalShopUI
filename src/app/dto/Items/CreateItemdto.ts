export class CreateItemDto {
        shopId: string        
        billNo: string
        billdate: Date
        itemName: string
        itemPower: string
        itemDescription: string
        itemDiscountPrice: number
        itemDiscountPercentage: number
        itemTotalAmount: number
        itemMrp: number
        itemCgstPercentage: number
        itemSgstPercentage: number
        itemPurchasedDate: Date
        itemPurchasedAmount: number
        itemManfacturerDate: Date
        itemExpiryDate: Date
        itemBatchNo: string;
        itemPurchasedQuantity: number
        itemManfacturerName: string
}