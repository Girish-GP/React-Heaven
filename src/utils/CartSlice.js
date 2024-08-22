import {createSlice} from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addCartItem: (state,action)=>{
            state?.items?.push({
                itemData: action?.payload,
                itemCount: 1,
                itemTotalPrice: Number(action?.payload?.card?.info?.price)/100
            });
        },
        removeCartItem: (state)=>{
            state?.items?.pop()
        },
        clearCartItems: (state)=>{
            state.items.length = 0
            //there is a reason why we donts do state.items = []
        }
    }
})

export const {addCartItem,removeCartItem,clearCartItems} = CartSlice?.actions;

export default CartSlice?.reducer;