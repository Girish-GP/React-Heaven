import { RestaurantCards ,RestaurantCardsEnhanced} from "./RestuarantCards";
import ShimmerComponent from "./Shimmer.component";
import MaterialIcon, {colorPalette} from 'material-icons-react';
// import resList from "../utils/mock-json";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorComponent from "./Error.component";
import useOnlineStatus from "../utils/useOnlineStatus";
//normal js variable
// let resList = []
export const BodyComponent = () =>{

  //Orginal Data State Variable 
  const [data,setData] = useState([])
  //State Variable
  const [dataCopy,setDataCopy] = useState(data);

  const [inputValue, setInputValue] = useState('');

  let onlineStatus = useOnlineStatus();
  
  const navigate = useNavigate();

  const OpenedRestuarantCards = RestaurantCardsEnhanced(RestaurantCards)
  
  useEffect(()=>{
    console.log("Use effect called.")
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
  try{
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    setData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setDataCopy(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(dataCopy)
    console.log(dataCopy,"here data copy")
  }catch(error){
    console.log(error)
  }
 
} 

const generateShimmer = ()=>{
  let components = [];
  for(let i=0;i<8;i++){
    components.push(<ShimmerComponent key={i} />)
  }
  return components;
}


if(!onlineStatus){
  return <ErrorComponent/>
}
//Conditional Rendering
  return dataCopy?.length ? (
    <div id="app-body" className="mt-8 flex items-center flex-col gap-4">
    <div className="w-4/12 border-2 flex items-center align-middle h-10 rounded-full">
        <div className="w-10/12 flex items-center border-none ms-6">
          <input placeholder="Search" className="w-full border-none outline-0" id="search-input" type="text" value={inputValue} onChange={inputValueChange}></input>
          {inputValue && (
          <span className="cursor-pointer flex items-center"><MaterialIcon icon="close" onClick={handleIconClick} /></span>
        
      )}
        </div>
        <button className="flex items-center justify-center ps-2" onClick={searchForRes}><MaterialIcon icon="search" />
        </button>

    </div>
    <div className="flex gap-4">
      <button className="border-2 rounded-3xl bg-cyan-300 p-3 shadow-sm" onClick={filter}>Top Rated</button>
      <button className="border-2 rounded-3xl bg-teal-100 p-3 shadow-sm" onClick={()=>{
        setDataCopy(data)
      }}>Reset</button>
    </div>
    <div className="flex flex-wrap ps-32 pe-32 mt-8 items-stretch">
            {       
                   
                    dataCopy.map((obj)=>{
                          return <div  key={obj?.info?.id} className="w-1/4 px-4 mb-8">

<Link className="h-full block" to={"/restaurant/" + obj?.info?.id}>
                            {/* if open add a label open to it */
                              obj?.info?.isOpen ? <OpenedRestuarantCards resData={obj}/> : <RestaurantCards  resData={obj}/>
                            }
                            </Link>
                          </div> 
                    })
            }
          
    </div>
    </div>
  ): (
    <div id="app-body" className="mt-8 flex items-center flex-col gap-4">
       <div className="w-4/12 border-2 flex items-center align-middle h-10 rounded-full bg-gray-200">  
       </div>
       <div className="w-full h-full flex flex-wrap justify-between px-8 py-8">

      
        {
         generateShimmer()
        }
       
       </div> 
    </div>
  )
}


// const temp = (comp)=>{
//   return ()=>{
//     return (<></>)
//   }
// }

// dummy = temp(comp)

// <dummy resData={ds}/>