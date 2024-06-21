import { RestaurantCards } from "./RestuarantCards"
import RestaurantCards2 from "./RestuarantCards"
import resList from "../utils/mock-json"
export const BodyComponent = () => (
    <div id="app-body" className="main-body">
     <div className="res-search">
        <input type="text"></input>
       <button>Search</button> 
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
                    resList?.map((obj)=>{
                          return  <RestaurantCards key={obj?.id} resData={obj}/>
                    })
            }
          
     </div>
    </div>
)


