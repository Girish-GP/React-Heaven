import { useState } from "react";
import { CDN_URl } from "../utils/constants";
import { useNavigate } from "react-router-dom";
export const RestaurantCards = (props) => {

    const navigateUrl = useNavigate();

    const { id,cloudinaryImageId,name,avgRating,cuisines,sla} = props?.resData?.info;

    console.log(id,props?.resData?.info)
     return(
     <div className="res-cards">
             <img src={CDN_URl+cloudinaryImageId}></img>
             <div className="res-cards-main-section">
                
                     <p>{name}</p>
                     <p>{avgRating}<span>&#9734;</span> </p>
             </div>
             <div className="res-cards-main-section">
                     <p>{cuisines?.join(", ")}</p>
             </div>
             <div className="res-cards-main-section">
                     <p>{sla?.slaString}</p>
             </div>
             <div className="view-btn-container">
             <button className="login-btn cursor-pointer" key={id} onClick={() =>{
       navigateUrl(`/restaurant/${id}`)
    }}>View details {id}</button>
             </div>
             
     </div>
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
