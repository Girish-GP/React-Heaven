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
         <div className="w-2/4 h-3/4 border-2 p-8 bg-slate-100 shadow-lg rounded-3xl">
            <h1 className="font-bold text-3xl">{dataObj[0]?.card?.card?.text}</h1>
            <div className="flex">
                {
                    dataObj[1]?.card?.card?.tabs?.map((obj)=>{
                       return (<div key={obj?.id} className="border-8">{obj?.title}</div>)
                    })
                }
              
            </div>
            <p>{dataObj[2]?.card?.card?.info?.avgRating}</p>
            <p>{costForTwoMessage}</p>
            <p>{cuisines?.join(',')}</p>
            <p>Outlet: {areaName}</p>

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