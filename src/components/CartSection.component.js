import { RES_ITEM_SUB_CATEGORIES_URL } from "../utils/constants";
import MaterialIcon from 'material-icons-react';
const CartSectionComponent = (props) => {
    const obj = props?.obj;
   return (
            <div className="w-3/4 border-2 p-4 shadow-lg rounded-3xl h-44 flex">
                    <div className="w-[30%] bg-red-200">
                    <img className="border-2 w-full h-full rounded-3xl object-cover shadow-md" src={RES_ITEM_SUB_CATEGORIES_URL + obj?.card?.info?.imageId} alt="Subcategory" />
                    </div>
                    <div className="w-[20%] bg-red-500">{obj?.card?.info?.name}</div>
                    <div className="w-[15%] bg-red-200">{obj2?.card?.info?.price/100 ?? null}</div>
                    <div className="w-[20%] bg-red-500">cart3</div>
                    <div className="w-[15%] bg-red-200"><MaterialIcon icon="delete"/></div>
                    
            </div>
    )
}

export default CartSectionComponent;