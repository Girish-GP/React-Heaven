import { RES_ITEM_SUB_CATEGORIES_URL } from "../utils/constants";
const RestuarantSubItemCategories = (props)=>{
    const subCategoriesList = props?.subCategoriesList;
    return (
    <>
    {
        subCategoriesList?.filter(obj => obj?.card?.hideRestaurantDetails)?.map((obj2)=>{
           return (
            <div className="p-4 border-b-2 flex justify-between">
              <div>
                <p>{obj2?.card?.info?.name}</p>
                <p>{obj2?.card?.info?.price/100} {obj2?.card?.info?.offerTags? obj2?.card?.info?.offerTags[0]?.title:''}  {obj2?.card?.info?.offerTags? obj2?.card?.info?.offerTags[0]?.subTitle:''}</p>
                <p>{obj2?.card?.info?.description}</p>
                <p>{obj2?.card?.info?.description}</p>
              </div>
              <div>
                <img src={RES_ITEM_SUB_CATEGORIES_URL +obj2?.card?.info?.imageId}></img>
              </div>
            </div>
           )
        })
       }</>
       
    )
}

export default RestuarantSubItemCategories;