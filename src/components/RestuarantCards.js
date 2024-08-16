import { useState,useContext } from "react";
import { CDN_URl } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import DummyContext from "../utils/DummyContext";
export const RestaurantCards = (props) => {

    const navigateUrl = useNavigate();

    const { id,cloudinaryImageId,name,avgRating,cuisines,sla} = props?.resData?.info;
  
    const {loggedInUser}=useContext(UserContext)

    const {project} = useContext(DummyContext)
    console.log(id,props?.resData?.info)
     return(
        <>
        <button  className="shadow-lg bg-orange-100 rounded-3xl h-full w-full flex flex-col items-start hover:scale-105 hover:shadow-md transition-all" key={id} onClick={() =>{
       navigateUrl(`/restaurant/${id}`)
    }}>
             <img className="rounded-3xl h-2/3 w-full" src={CDN_URl+cloudinaryImageId}></img>
             <div className="flex flex-col px-4 py-3 w-full">
                
                <div className="flex pb-2"> 
                        <h3 className="text-xl font-bold m-0 text-left leading-tight">{name}</h3>                 
                        <div className="ms-auto leading-tight pt-[0.25rem]">{avgRating}<span>&#9734;</span> </div>
                </div>
                <div className="text-left">
                <p>{cuisines?.join(", ")}</p>
                <p>{sla?.slaString}</p>
                {/* <p>LoggedIn User: {loggedInUser}</p> */}
                <p>Project: {project}</p>
                </div>
             </div>
             
    </button>
        
        </>
     
)
}

//Higher order component 
export const RestaurantCardsEnhanced = (RestaurantCards) => {
        return (props)=>{
                return (
                        <div className="relative h-full">
                        <label className="rounded-1xl bg-green-300 p-1 absolute top-0 left-0 rounded-tl-xl">Open</label>
                        <RestaurantCards resData={props?.resData}/>
                        </div>
                    )   
                
        } 
}

