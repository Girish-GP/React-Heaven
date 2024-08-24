import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      // Extract the item ID or any unique identifier from the payload
      const itemId =
        action?.payload?.card?.info?.id ??
        action?.payload?.itemData?.card?.info?.id;

      // Find the item in the cart by its unique identifier
      const existingItem = state?.items?.find(
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
        state.items.push({
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
      const existingItem = state?.items?.find(
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
          state.items = state?.items?.filter(
            (obj) => obj?.itemData?.card?.info?.id !== itemId
          );
        }
      }
    },
    clearCartItems: (state, action) => {
      //state.items.length = 0
      //there is a reason why we donts do state.items = []
      const itemId =
        action?.payload?.card?.info?.id ??
        action?.payload?.itemData?.card?.info?.id;
      state.items = state?.items?.filter(
        (obj) => obj?.itemData?.card?.info?.id !== itemId
      );
    },
  },
});

export const { addCartItem, removeCartItem, clearCartItems } =
  CartSlice?.actions;

export default CartSlice?.reducer;
