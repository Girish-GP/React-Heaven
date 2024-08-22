import {createSlice} from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addCartItem: (state,action)=>{
            state?.items?.push(action?.payload)
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