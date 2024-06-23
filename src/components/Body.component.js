import { RestaurantCards } from "./RestuarantCards";
import ShimmerComponent from "./Shimmer.component";
import MaterialIcon, {colorPalette} from 'material-icons-react';
// import resList from "../utils/mock-json";
import { useState, useEffect } from "react";
//normal js variable
// let resList = []
export const BodyComponent = () =>{

  //Orginal Data State Variable 
  const [data,setData] = useState([])
  //State Variable
  const [dataCopy,setDataCopy] = useState(data);

  const [inputValue, setInputValue] = useState('');

  useEffect(()=>{
    fetchData()
  },[])
  
  //Filter Top Restuarant Function
  const filter = ()=>{
      const temp = dataCopy?.filter((obj)=> Number(obj?.info?.avgRating) >= 4.3 );
      setDataCopy(temp)
     }
  

  const inputValueChange = (event) =>[
   setInputValue(event.target.value)
  ]

  const handleIconClick = () => {
    setDataCopy(data);
    setInputValue('')
  }
  
  //Search Function
  const searchForRes = () => {
    if(!inputValue){
      setDataCopy(data);
    } else {
      const temp = dataCopy?.filter(obj =>obj?.info?.name?.replace(/\\s+/g,"")?.toLowerCase()?.includes(inputValue?.toLowerCase()));
      setDataCopy(temp)
  }
}

 const fetchData = async() => {
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const jsonData = await data.json()
  setData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setDataCopy(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  console.log(dataCopy)
} 

const generateShimmer = ()=>{
  let components = [];
  for(let i=0;i<8;i++){
    components.push(<ShimmerComponent key={i} />)
  }
  return components;
}

//Conditional Rendering
  return dataCopy?.length ? (
    <div id="app-body" className="main-body">
    <div className="res-search">
        <div className="res-search-input">
          <input className="res-search-input-main" id="search-input" type="text" value={inputValue} onChange={inputValueChange}></input>
          {inputValue && (
          <span className="cursor-pointer"><MaterialIcon icon="close" onClick={handleIconClick} /></span>
        
      )}
        </div>
        <button onClick={searchForRes}><MaterialIcon icon="search" />
      </button> 
    </div>
    <div className="filter">
      <button className="filter-btn" onClick={filter}>Top Rated button</button>
      <button className="reset-btn" onClick={()=>{
        setDataCopy(data)
      }}>Reset</button>
    </div>
    <div className="res-container">

            {       
          
                    dataCopy.map((obj)=>{
                          return  <RestaurantCards key={obj?.id} resData={obj}/>
                    })
            }
          
    </div>
    </div>
  ): (
    <div className="main-body">
       <div className="res-container">
      
        {
         generateShimmer()
        }
       
       </div> 
    </div>
  )
}


