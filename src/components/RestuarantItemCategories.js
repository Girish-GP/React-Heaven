import { useState } from "react";
import RestuarantSubItemCategories from "./RestuarantSubItemCategories";
import MaterialIcon from "material-icons-react";

const RestuarantItemCategories = (props) => {
  const obj = props?.resItemData;
  const categoriesClicked = props?.showItem;
  const setShowIndex = props?.setShowIndex;
  // const [categoriesClicked,setCategoriesClicked]= useState(false)
  const subCategoriesList = obj?.card?.card?.itemCards;

  return (
    <div className="w-full flex flex-col gap-3 mt-4 shadow-sm pb-2">
      <div className="w-full h-3 bg-slate-200"></div>
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          categoriesClicked ? setShowIndex(true) : setShowIndex(false);
        }}
      >
        <div className="text-left font-bold text-lg px-3 flex">
          {obj?.card?.card?.title}
          <p className="ps-1">({subCategoriesList?.length})</p>
        </div>
        <div className="px-3">
          {/* {!categoriesClicked && '>'} */}
          {!categoriesClicked && <MaterialIcon icon="expand_more" />}
          {/* {categoriesClicked && '^'} */}
          {categoriesClicked && <MaterialIcon icon="expand_less" />}
        </div>
      </div>
      {categoriesClicked ? (
        <RestuarantSubItemCategories
          key={`${obj?.card?.card?.title}'-subCategory'}`}
          subCategoriesList={subCategoriesList}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default RestuarantItemCategories;
