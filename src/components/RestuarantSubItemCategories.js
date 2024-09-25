import { RES_ITEM_SUB_CATEGORIES_URL } from "../utils/constants";
import { addCartItem, removeCartItem } from "../utils/CartSlice";
import { useDispatch, useSelector } from "react-redux";
// import MaterialIcon from "material-icons-react";

const RestuarantSubItemCategories = (props) => {
  const subCategoriesList = props?.subCategoriesList;

  const cartItemList = useSelector((store) => store?.cart?.items?.itemsList);

  const dispatch = useDispatch();

  const addItems = (obj) => {
    //dispatch an action
    return dispatch(addCartItem(obj));
  };

  const removeItem = (obj) => {
    //dispatch an action
    return dispatch(removeCartItem(obj));
  };

  const renderBasedOnCartItem = (obj2) => {
    //check if item is already present inside the cart
    const existingItem = cartItemList?.find(
      (objItem) => objItem?.itemData?.card?.info?.id === obj2?.card?.info?.id
    );

    if (!existingItem) {
      return (
        <div
          data-testid="add-btn"
          className="w-20 h-10 z-50 absolute left-1/2 transform -translate-x-1/2 translate-y-1/4 bottom-3 rounded-xl border-2 flex items-center bg-white cursor-pointer justify-center shadow-lg font-bold text-green-700 hover:bg-gray-300"
          onClick={() => addItems(obj2)}
        >
          ADD
        </div>
      );
    } else {
      return (
        <div className="w-24 h-10 z-50 absolute left-1/2 transform -translate-x-1/2 translate-y-1/4 bottom-3 rounded-xl border-2 flex gap-2 items-center bg-white cursor-pointer justify-center shadow-lg font-bold text-green-700 hover:bg-gray-300">
          <span className="cursor-pointer" onClick={() => addItems(obj2)}>
            +
            {/* <MaterialIcon icon="add" /> */}
          </span>
          <span>{existingItem?.itemCount}</span>
          <span className="cursor-pointer" onClick={() => removeItem(obj2)}>
            {/* <MaterialIcon icon="remove" /> */}
            -
          </span>
        </div>
      );
    }
  };

  return (
    <>
      {subCategoriesList
        ?.filter((obj) => obj?.card?.hideRestaurantDetails)
        ?.map((obj2) => {
          return (
            <div
            data-testid = "foodItem"
              key={obj2?.card?.info?.name}
              className="p-4 border-b-2 flex w-full h-full"
            >
              <div className="font-medium flex w-2/3 flex-col gap-2">
                <p className="text-lg">{obj2?.card?.info?.name ?? null}</p>
                <p>
                  {obj2?.card?.info?.price / 100 ?? null}{" "}
                  {obj2?.card?.info?.offerTags
                    ? obj2?.card?.info?.offerTags[0]?.title
                    : "" ?? null}{" "}
                  {obj2?.card?.info?.offerTags
                    ? obj2?.card?.info?.offerTags[0]?.subTitle
                    : "" ?? null}
                </p>
                <p>
                  {obj2?.card?.info?.ratings?.aggregatedRating?.rating ?? null}
                </p>
                <p className="font-light">
                  {obj2?.card?.info?.description ?? null}
                </p>
              </div>
              <div className="ms-auto w-1/3 h-11/12 pb-4 relative">
                <img
                  className="border-2 w-full h-full rounded-3xl object-cover shadow-md"
                  src={RES_ITEM_SUB_CATEGORIES_URL + obj2?.card?.info?.imageId}
                  alt="Subcategory"
                />
                {renderBasedOnCartItem(obj2)}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default RestuarantSubItemCategories;
