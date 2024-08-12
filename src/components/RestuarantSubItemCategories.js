import { RES_ITEM_SUB_CATEGORIES_URL} from "../utils/constants";
const RestuarantSubItemCategories = (props)=>{
    const subCategoriesList = props?.subCategoriesList;
    return (
    <>
    {
        subCategoriesList?.filter(obj => obj?.card?.hideRestaurantDetails)?.map((obj2)=>{
           return (
            <div className="p-4 border-b-2 flex justify-between w-full h-full">
              <div className="font-medium flex flex-col gap-2">
                <p className="text-lg">{obj2?.card?.info?.name ?? null}</p>
                <p>{obj2?.card?.info?.price/100 ?? null} {obj2?.card?.info?.offerTags? obj2?.card?.info?.offerTags[0]?.title:'' ?? null}  {obj2?.card?.info?.offerTags? obj2?.card?.info?.offerTags[0]?.subTitle:'' ?? null}</p>
                <p>{obj2?.card?.info?.ratings?.aggregatedRating?.rating ?? null ?? null}</p>
                <p className="font-light">{obj2?.card?.info?.description ?? null}</p>
              </div>
              <div className="w-1/3 h-full overflow-hidden pb-4 relative">
              <img className="border-2 w-full h-5/6 rounded-3xl object-cover shadow-md" src={RES_ITEM_SUB_CATEGORIES_URL + obj2?.card?.info?.imageId} alt="Subcategory" />
              <div className="w-20 h-10 z-50 absolute left-1/2 transform -translate-x-1/2 translate-y-1/4 bottom-3 rounded-xl border-2 flex items-center bg-white cursor-pointer justify-center shadow-lg font-bold text-green-700 hover:bg-gray-300">
                ADD
              </div>
            </div>

            </div>
           )
         ?? null})
        ?? null}</>
       
    )
 ?? null}

export default RestuarantSubItemCategories;