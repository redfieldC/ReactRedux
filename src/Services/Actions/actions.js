import { Add_To_cart } from "../constants"

export const AddToCart = (itemData) =>{
  console.log('itemData inside action.js ',itemData);
  
  return {
    type:Add_To_cart,
    data:itemData
  }
}