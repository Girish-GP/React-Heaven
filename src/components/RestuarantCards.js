import { useState } from "react";
import { CDN_URl } from "../utils/constants";
import { useNavigate } from "react-router-dom";
export const RestaurantCards = (props) => {

    const navigateUrl = useNavigate();

    const { id,cloudinaryImageId,name,avgRating,cuisines,sla} = props?.resData?.info;

    console.log(id,props?.resData?.info)
     return(
        <>
        <button  className="shadow-lg bg-orange-100 rounded-3xl hover:border-2 border-red-800 m-1" key={id} onClick={() =>{
       navigateUrl(`/restaurant/${id}`)
    }}>
        <div className="">
             <img className="rounded-3xl h-2/3 w-full" src={CDN_URl+cloudinaryImageId}></img>
             <div className="flex flex-col px-4 gap-1 mt-2">
                
                    <div className="flex justify-between"> 
                        <p className="text-xl font-bold">{name}</p>                 
                       <p>{avgRating}<span>&#9734;</span> </p>
                       </div>
                     <p>{cuisines?.join(", ")}</p>
                     <p>{sla?.slaString}</p>
             </div>
             {/* <div className="flex justify-center mb-4"> */}
             {/* <button  className="border-2 rounded-3xl bg-amber-300 p-3 shadow-sm" key={id} onClick={() =>{
       navigateUrl(`/restaurant/${id}`)
    }}></button> */}
             {/* </div> */}
             
     </div>
    </button>
        
        </>
     
)
}

//Higher order component 
export const RestaurantCardsEnhanced = (RestaurantCards) => {
        return (props)=>{
                return (
                        < div className="relative">
                        <label className="border-2 rounded-1xl bg-green-300 p-1 absolute top-0 left-0 rounded-tl-xl">Open</label>
                        <RestaurantCards resData={props?.resData}/>
                        </div>
                    )   
                
        } 
}

