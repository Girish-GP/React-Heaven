import { RES_ITEM_SUB_CATEGORIES_URL } from "../utils/constants";
import MaterialIcon from 'material-icons-react';
const CartSectionComponent = (props) => {
    const obj = props?.obj;
   return (
            <div className="w-3/4 border-2 p-4 shadow-lg rounded-3xl h-44 flex mt-4">
                    <img className="border-2 w-[20%] h-full rounded-3xl object-cover shadow-md" src={RES_ITEM_SUB_CATEGORIES_URL + obj?.itemData?.card?.info?.imageId} alt="Subcategory" />
                    <div className="w-[30%] flex justify-center items-center">{obj?.itemData?.card?.info?.name}</div>
                    <div className="w-[15%] flex justify-center items-center">{obj?.itemTotalPrice}</div>
                    <div className="w-[30%] flex justify-center items-center px-4 "><div className="w-2/4 border-2 bg-slate-100 flex gap-4 px-4 py-1 rounded-xl"><span className="cursor-pointer"><MaterialIcon icon="add"/></span><span>{obj?.itemCount}</span><span className="cursor-pointer"><MaterialIcon icon="remove"/></span></div></div>
                    <div className="w-[10%] cursor-pointer flex justify-center items-center"><MaterialIcon icon="delete"/></div>
                    
            </div>
    )
}

export default CartSectionComponent;