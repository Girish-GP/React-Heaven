import { RestaurantCards } from "./RestuarantCards"
import RestaurantCards2 from "./RestuarantCards"
import resList from "../utils/mock-json";
import { useState } from "react";
//normal js variable
let dataCopy2 = [
  {
    "info": {
        "id": "151438",
        "name": "Hot 'N' Spicy Besides Vani",
        "cloudinaryImageId": "9e5acc6c48873d4383359c8df1e4e96e",

        "cuisines": [
            "Biryani",
            "Chinese",
            "Pizzas"
        ],
        "avgRating": 4.2,
  
        "sla": {
  
            "slaString": "10-15 mins",
         
        },
      
        
    },
    
  },

  {
    "info": {
        "id": "151438",
        "name": "Burger King",
        "cloudinaryImageId": "9e5acc6c48873d4383359c8df1e4e96e",

        "cuisines": [
            "Biryani",
            "Chinese",
            "Pizzas"
        ],
        "avgRating": 3.2,
  
        "sla": {
  
            "slaString": "10-15 mins",
         
        },
      
        
    },
    
  },
];

//State Variable



export const BodyComponent = () =>{
  const [dataCopy,setDataCopy] = useState([
    {
      "info": {
          "id": "151438",
          "name": "Hot 'N' Spicy Besides Vani",
          "cloudinaryImageId": "9e5acc6c48873d4383359c8df1e4e96e",
  
          "cuisines": [
              "Biryani",
              "Chinese",
              "Pizzas"
          ],
          "avgRating": 4.2,
    
          "sla": {
    
              "slaString": "10-15 mins",
           
          },
        
          
      },
      
    },
    {
      "info": {
          "id": "151438",
          "name": "Burger King",
          "cloudinaryImageId": "9e5acc6c48873d4383359c8df1e4e96e",
  
          "cuisines": [
              "Biryani",
              "Chinese",
              "Pizzas"
          ],
          "avgRating": 3.2,
    
          "sla": {
    
              "slaString": "10-15 mins",
           
          },
        
          
      },
      
    },
  ]);
  return (
    <div id="app-body" className="main-body">
     <div className="res-search">
        <input type="text"></input>
       <button>Search</button> 
     </div>
     <div className="filter">
       <button className="filter-btn" onClick={()=>{
        const temp = dataCopy?.filter((obj)=> Number(obj?.info?.avgRating) >= 4 );
        setDataCopy(temp)
       }}>Top Rated button</button>
       <button className="reset-btn" onClick={()=>{
        setDataCopy(dataCopy)
       }}>Reset</button>
     </div>
     <div className="res-container">
            {/* <RestaurantCards2 imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" title="Nana bhau Hotel" rating="5" cusine="Ghar ka khana" time="5 hour"/>
            <RestaurantCards2 imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b318c0b4bc2169550145ace1d6e791a2" title="Nana bhau Hotel" rating="5" cusine="Ghar ka khana" time="5 hour"/>
            <RestaurantCards2 imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" title="Nana bhau Hotel" rating="5" cusine="Ghar ka khana" time="5 hour"/>
            <RestaurantCards2 imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rmlcifdqtpoxdrdvet2s" title="Nana bhau Hotel" rating="5" cusine="Ghar ka khana" time="5 hour"/>
            <RestaurantCards2 imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" title="Nana bhau Hotel" rating="5" cusine="Ghar ka khana" time="5 hour"/> */}
            {/* <RestaurantCards2 resData={resList[0]}/> 
            <RestaurantCards2 resData={resList[1]}/> 
            <RestaurantCards2 resData={resList[2]}/> 
            <RestaurantCards2 resData={resList[3]}/> 
            <RestaurantCards2 resData={resList[4]}/> 
            <RestaurantCards2 resData={resList[5]}/> 
            <RestaurantCards2 resData={resList[6]}/> 
            <RestaurantCards2 resData={resList[7]}/>  */}
            {
                    dataCopy?.map((obj)=>{
                          return  <RestaurantCards key={obj?.id} resData={obj}/>
                    })
            }
          
     </div>
    </div>
)
}


