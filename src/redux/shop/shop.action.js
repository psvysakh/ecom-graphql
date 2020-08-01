import shopActionType from "./shop.type";
export const updateShopCollections=collectionMap=>(
    {
        type:shopActionType.ADD_SHOP_DATA,
        payload:collectionMap
    }
)