import { RES_ITEM_SUB_CATEGORIES_URL } from "../utils/constants";
// import MaterialIcon from "material-icons-react";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  clearCartItems,
} from "../utils/CartSlice";
const CartSectionComponent = (props) => {
  const obj = props?.obj;

  const dispatch = useDispatch();

  const addItem = (obj) => {
    return dispatch(addCartItem(obj));
  };

  const removeItem = (obj) => {
    return dispatch(removeCartItem(obj));
  };

  const clearItem = (obj) => {
    return dispatch(clearCartItems(obj));
  };

  return (
    <div data-testid="cartItem" className="w-2/3 border-none px-4 py-2 shadow-lg rounded-3xl h-44 flex mt-8 bg-orange-100">
      <img
        className="border-2 w-[20%] h-full rounded-3xl object-cover shadow-md"
        src={RES_ITEM_SUB_CATEGORIES_URL + obj?.itemData?.card?.info?.imageId}
        alt="Subcategory"
      />
      <div className="w-[30%] h-full flex justify-center items-center flex-col p-4 gap-4">
       <p className="font-bold">{obj?.itemData?.card?.info?.name}</p> 
       <p className="w-full h-full overflow-hidden">{obj?.itemData?.card?.info?.description}</p> 
      </div>
      <div className="w-[15%] flex justify-center items-center">
        {obj?.itemTotalPrice}
      </div>
      <div className="w-[30%] flex justify-center items-center px-4 ">
        <div className="w-2/4 border-2 bg-slate-100 flex gap-4 px-4 py-1 rounded-xl">
          <span className="cursor-pointer" onClick={() => addItem(obj)}>
            {/* <MaterialIcon icon="add" /> */}
            +
          </span>
          <span>{obj?.itemCount}</span>
          <span className="cursor-pointer" onClick={() => removeItem(obj)}>
            {/* <MaterialIcon icon="remove" /> */}
            -
          </span>
        </div>
      </div>
      <div
        className="w-[10%] cursor-pointer flex justify-center items-center"
        onClick={() => clearItem(obj)}
      >
        {/* <MaterialIcon icon="delete" /> */}
        Delete
      </div>
    </div>
  );
};

export default CartSectionComponent;
