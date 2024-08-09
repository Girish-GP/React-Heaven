import { useParams } from "react-router-dom"
import useResViewData from "../utils/useResViewData"
const RestuarantViewDetails = () =>{
    
    const {resId} = useParams()
    // const [dataObj,setData]=useState(null);

   const dataObj = useResViewData(resId) //custom hook which will fetch the data for specific restaurant

    //Below used in custom hook
    // useEffect(()=>{
    //  fetchData();
    // },[])

    // const fetchData = async() =>{
    //     const data = await fetch(`${RES_VIEW_URL}${resId}`);
    //     const jsonData = await data.json();
    //     setData(jsonData?.data?.cards)
    //     console.log(dataObj);
        
    // }
    if(dataObj === null) return (
        <div className="res-details-container">
         <div className="res-details-shimmer"></div>
         </div>
    )
    const {name,avgRating,costForTwoMessage,cuisines,areaName} = dataObj ? dataObj[2]?.card?.card?.info : {};
    const menu =dataObj[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel ?? dataObj[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    return (
        <div className="flex justify-center p-8">
         <div className="w-2/4 h-3/4 border-2 p-8 shadow-lg rounded-3xl">
            <h1 className="font-bold text-3xl">{dataObj[0]?.card?.card?.text}</h1>
            <div className="flex  border-b-2 w-full mt-4 gap-2">
                {
                    dataObj[1]?.card?.card?.tabs?.map((obj)=>{
                       return (<a key={obj?.id} className="cursor-pointer font-bold text-lg pe-4 border-b-4 border-b-orange-600">{obj?.title}</a>)
                    })
                }
              
            </div>
            <div className="border-none text-base rounded-b-3xl h-44 mt-8 w-full relative ps-4 pb-4 pe-4 box-border bg-slate-50">
                <div className="font-bold absolute p-4 top-0 border-2 w-[calc(100%-2rem)] h-[calc(100%-1rem)] bg-white rounded-2xl">
                 <div className="mb-2 flex gap-4"><p>{dataObj[2]?.card?.card?.info?.avgRating} ({dataObj[2]?.card?.card?.info?.totalRatingsString})</p>
                 <p>. {costForTwoMessage}</p>
                </div>
                <p className="text-orange-500 mb-2 underline decoration-slice">{cuisines?.join(', ')}</p>
                <p className="mb-2">Outlet: {areaName}</p>
                <hr></hr>
                </div>
            </div>
           

            <h3>Hotel Menu:</h3>
            <ol>
                {
                  menu?.map((obj) => <li key={obj?.dish?.info?.id ?? obj?.card?.info?.id}>{obj?.dish?.info?.name ?? obj?.card?.info?.name}: Rs {obj?.dish?.info?.price ?? obj?.dish?.info?.defaultPrice ?? obj?.card?.info?.price ?? obj?.card?.info?.defaultPrice}</li>)
                }
                  
            </ol>
         </div>
        </div>
        
    ) 
}

export default RestuarantViewDetails;