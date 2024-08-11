import { useState } from "react";
import RestuarantSubItemCategories from "./RestuarantSubItemCategories";
const RestuarantItemCategories = (props)=>{
    const obj = props?.resItemData;
    const [categoriesClicked,setCategoriesClicked]= useState(false)
    const subCategoriesList = obj?.card?.card?.itemCards;
    return (
        <div className="w-full flex flex-col gap-3 mt-4">
            <div className="w-full h-3 bg-slate-200"></div>
            <button onClick={()=>{
                setCategoriesClicked(!categoriesClicked)
            }}><div className="font-bold text-lg px-3">{obj?.card?.card?.title}</div></button>
            {
                categoriesClicked ? <RestuarantSubItemCategories subCategoriesList={subCategoriesList}/> : ''
            }
            
        </div>
    )
}

export default RestuarantItemCategories;