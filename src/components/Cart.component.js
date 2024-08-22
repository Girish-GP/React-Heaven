import { useSelector } from "react-redux";
import CartSectionComponent from "./CartSection.component";
const CartComponent = () => {
  
    const cartData = useSelector((store)=> store?.cart?.items);
           return (
            <div className="flex justify-center items-center flex-col mt-8">
                <div  className="font-bold text-3xl text-red-400 mb-2">
                    YOUR CART
                </div>
                <hr className="mb-2 border-b-2"></hr>
                 {
                cartData.map((obj)=>{
                    
                    return <CartSectionComponent key={obj?.itemData?.card?.info?.name} obj={obj}/>
                })
            }
            </div>
           )
        
        
}

export default CartComponent;