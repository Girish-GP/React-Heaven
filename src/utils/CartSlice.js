import { createSlice } from "@reduxjs/toolkit";
import { COUPON_CODES } from "./constants";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {
      itemsList: [],
      cartTotal: 0
    },
  },
  reducers: {
    addCartItem: (state, action) => {
      // Extract the item ID or any unique identifier from the payload
      const itemId =
        action?.payload?.card?.info?.id ??
        action?.payload?.itemData?.card?.info?.id;

      // Find the item in the cart by its unique identifier
      const existingItem = state?.items?.itemsList?.find(
        (item) => item?.itemData?.card?.info?.id === itemId
      );

      if (existingItem) {
        // If the item already exists, update the count and total price
        existingItem.itemCount += 1;
        existingItem.itemTotalPrice +=
          (Number(action?.payload?.card?.info?.price) ||
            Number(action?.payload?.itemData?.card?.info?.price) ||
            0) / 100;
      } else {
        // If the item doesn't exist, add it to the cart
        state?.items?.itemsList.push({
          itemData: action.payload,
          itemCount: 1,
          itemTotalPrice: (Number(action.payload.card.info.price) / 100),
        });
      }
    },
    removeCartItem: (state, action) => {
      // Extract the item ID or any unique identifier from the payload
      const itemId =
        action?.payload?.card?.info?.id ??
        action?.payload?.itemData?.card?.info?.id;

      // Find the item in the cart by its unique identifier
      const existingItem = state?.items?.itemsList?.find(
        (item) => item?.itemData?.card?.info?.id === itemId
      );

      if (existingItem) {
        if (existingItem?.itemCount > 1) {
          existingItem.itemCount -= 1;
          existingItem.itemTotalPrice -=
            (Number(action?.payload?.card?.info?.price) ||
              Number(action?.payload?.itemData?.card?.info?.price) ||
              0) / 100;
        } else {
          state.items.itemsList = state?.items?.itemsList?.filter(
            (obj) => obj?.itemData?.card?.info?.id !== itemId
          );
        }
      }
    },
    clearCartItems: (state, action) => {
      //state?.items?.itemsList.length = 0
      //there is a reason why we donts do state?.items?.itemsList = []
      const itemId =
        action?.payload?.card?.info?.id ??
        action?.payload?.itemData?.card?.info?.id;
      state.items.itemsList = state?.items?.itemsList.filter(
        (obj) => obj?.itemData?.card?.info?.id !== itemId
      );
    },
    cartTotal: (state,action) => {
      let sum = state?.items?.itemsList.reduce((acc,cv)=>{
        acc = acc + cv?.itemTotalPrice;
        return acc
      },0)
      const coupon = COUPON_CODES || {};
      const discountObj = coupon?.find(obj => obj?.code == action?.payload) || 0;
      if(discountObj){
        sum -= sum * ((discountObj?.discount)/100);
      }
      state.items.cartTotal = sum > 0 ? sum : 0
    }
  },
});

export const { addCartItem, removeCartItem, clearCartItems ,cartTotal} =
  CartSlice?.actions;

export default CartSlice?.reducer;
