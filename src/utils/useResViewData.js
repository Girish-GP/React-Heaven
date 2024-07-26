import { useState,useEffect } from "react";
import { RES_VIEW_URL } from "./constants";

const useResViewData = (id) => {
    const [resInfo,setresInfo]=useState(null)
    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
      const data = await fetch(`${RES_VIEW_URL}/${id}`)
      const jsonData = await data?.json();
      setresInfo(jsonData?.data?.cards)
    } 
   return resInfo;

}

export default useResViewData;