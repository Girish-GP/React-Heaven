import { useState } from "react";
import { CDN_URl } from "../utils/constants";
import { useNavigate } from "react-router-dom";
export const RestaurantCards = (props) => {

    const navigateUrl = useNavigate();

    const { id,cloudinaryImageId,name,avgRating,cuisines,sla} = props?.resData?.info;

    console.log(id,props?.resData?.info)
     return(
        <>
        <button  className="shadow-sm" key={id} onClick={() =>{
       navigateUrl(`/restaurant/${id}`)
    }}>
        <div className="w-72 h-96 bg-orange-100 rounded-3xl">
             <img className="rounded-3xl h-2/3 w-full" src={CDN_URl+cloudinaryImageId}></img>
             <div className="flex flex-col px-4 gap-1 mt-2">
                
                    <div className="flex justify-between"> 
                        <p>{name}</p>                 
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

const RestaurantCards2 = (props) => {
       const { imgLink,title,rating,cusine,time} = props;

        return(
        <div className="res-cards">
                <img src={imgLink}></img>
                <div className="res-cards-main-section">
                        <p>{title}</p>
                        <p>{rating}<span>&#9734;</span> </p>
                </div>
                <div className="res-cards-main-section">
                        <p>{cusine}</p>
                </div>
                <div className="res-cards-main-section">
                        <p>{time}</p>
                </div>
        </div>
)
}

export default RestaurantCards
