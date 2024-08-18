import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: ['burger','pizza']
    },
    reducers:{
        addItem: (state,action)=>{
            //mutating the state over here
           state?.items?.push(action?.payload)
        },
        removeItem: (state,action)=>{
            state?.items?.pop()
        },
        clearCart:(state)=>{
            state.items.length = 0
        }
    }
})

export const {addItem,removeItem,clearCart} = CartSlice?.actions;


export default CartSlice?.reducer;