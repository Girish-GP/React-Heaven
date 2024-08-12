import { RES_ITEM_SUB_CATEGORIES_URL} from "../utils/constants";
const RestuarantSubItemCategories = (props)=>{
    const subCategoriesList = props?.subCategoriesList;
    return (
    <>
    {
        subCategoriesList?.filter(obj => obj?.card?.hideRestaurantDetails)?.map((obj2)=>{
           return (
            <div className="p-4 border-b-2 flex justify-between w-full h-44">
              <div className="font-medium">
                <p>{obj2?.card?.info?.name ?? null}</p>
                <p>{obj2?.card?.info?.price/100 ?? null} {obj2?.card?.info?.offerTags? obj2?.card?.info?.offerTags[0]?.title:'' ?? null}  {obj2?.card?.info?.offerTags? obj2?.card?.info?.offerTags[0]?.subTitle:'' ?? null}</p>
                <p>{obj2?.card?.info?.ratings?.aggregatedRating?.rating ?? null ?? null}</p>
                <p className="font-light">{obj2?.card?.info?.description ?? null}</p>
              </div>
              <div className="w-1/3 h-full">
                <img src={RES_ITEM_SUB_CATEGORIES_URL +obj2?.card?.info?.imageId}></img>
              </div>
            </div>
           )
         ?? null})
        ?? null}</>
       
    )
 ?? null}

export default RestuarantSubItemCategories;