import { useSelector } from "react-redux";
import CartSectionComponent from "./CartSection.component";
import { Link } from "react-router-dom";
import { EMPRT_CART_URL } from "../utils/constants";

const CartComponent = () => {
     const sum = (data)=>{
        const sum = data?.reduce((acc,cv)=> {
            acc = acc + cv?.itemTotalPrice;
            return acc
          },0)
          return sum?.toFixed(2)
     }
    const cartData = useSelector((store)=> store?.cart?.items);
           return  (
            <div className="flex justify-center items-center flex-col mt-8">
                <div  className="font-bold text-3xl text-red-400 mb-2">
                    YOUR CART
                </div>         
                 { cartData?.length ? 
                cartData.map((obj)=>{
                    
                    return <CartSectionComponent key={obj?.itemData?.card?.info?.name} obj={obj}/>
                } 
                
                
            ) : (
                    <div className="w-2/4 h-full shadow-sm p-8 flex flex-col items-center">
                        <img className="w-2/4" src={EMPRT_CART_URL} alt="cart empty"></img>
                    <p className="text-xl mt-4 font-medium">Your cart is empty</p>
                    <p className="text-sm mt-2 mb-8">You can go to home page to view more restaurants</p>
                    <Link className="text-xl font-bold bg-red-400 text-white rounded-sm p-2" to="/" >SEE RESTUARANTS NEAR YOU</Link>
                </div>   
                )
               }
               {
                cartData?.length && sum(cartData) && <div className="border-none mt-4 rounded-xl shadow-lg w-80 p-8">
                <p className="font-bold text-xl">Cart Total</p>
                <div className="mt-2 flex justify-between">
                    <p>Total</p>
                    <span>{
                        sum(cartData)
                    }</span>
                </div>
               </div>  
               }
            </div>
           )
        
}

export default CartComponent;