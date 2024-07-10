import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { RES_VIEW_URL } from "../utils/constants"
const RestuarantViewDetails = () =>{
    
    const {resId} = useParams()
    const [dataObj,setData]=useState(null);
    console.log(dataObj)
    useEffect(()=>{
     fetchData();
    },[])

    const fetchData = async() =>{
        const data = await fetch(`${RES_VIEW_URL}${resId}`);
        const jsonData = await data.json();
        setData(jsonData?.data?.cards)
        console.log(dataObj);
        
    }
    if(dataObj === null) return (
        <div className="res-details-container">
         <div className="res-details-shimmer"></div>
         </div>
    )
    const {name,avgRating,costForTwoMessage,cuisines,areaName} = dataObj ? dataObj[2]?.card?.card?.info : {};
    const menu =dataObj[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel ?? dataObj[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    return (
        <div className="res-details-container">
         <div className="res-details">
            <h1>{name}</h1>
            <p>{avgRating}</p>
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