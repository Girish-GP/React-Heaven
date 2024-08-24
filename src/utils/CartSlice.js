import {createSlice} from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

const dataList = useSelector((store)=> store?.cart?.items)
console.log(dataList)
const checkIfPresent = (dataList) =>{
    dataList?.map((obj)=>{
        let temp = false;
        if(obj?.itemData?.card?.info?.id == action?.payload?.card?.info?.id){
            temp = true
            objIndex = index;
        } 
        return temp;
    })
}
const addCartItemFunction = (state,action)=>{
    let objIndex = null;
 
    if(checkIfPresent(dataList)){
        //update count and total price for existing item
        if(objIndex){
            state.items[objIndex].itemCount++;
            state.items[objIndex].itemTotalPrice = state.items[objIndex].itemTotalPrice * state.items[objIndex].itemCount;
        }
    } else {
        //Push new item
        state?.items?.push({
            itemData: action?.payload,
            itemCount: 1,
            itemTotalPrice: Number(action?.payload?.card?.info?.price)/100
        });
    }
}

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addCartItem: (state,action)=>{
           addCartItemFunction(state,action)
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