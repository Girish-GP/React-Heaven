import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
let isLoggedIn = false;
let tex = "Login"
export const HeaderComponent = () =>{
  console.log("Header Render")
  const [loginText,setLoginText]=useState('Login');
  const login = () =>{
    isLoggedIn = !isLoggedIn;
    isLoggedIn ? setLoginText("Logout") : setLoginText("Login")
    // isLoggedIn ? tex = "Logout" : tex = "Login" Here normal js varible will be updated but UI wil not be rendered
  }
  const onlineStatus = useOnlineStatus();

  return (
    <div id="app-header" className="flex px-32 border-b-2 shadow-lg justify-between">
      <div className="logo-container">
          <img className="w-28 h-22" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center justify-between gap-12">   
               <li>Online Status: {onlineStatus? 'Online' : 'Offline'}</li>

               <li><Link to="">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact-us">Contacts</Link></li>
               <li><Link to="/cart">Cart</Link></li>
               <li><Link to="/grocery">Grocery</Link></li>
               <li><button className="border-2 rounded-2xl bg-cyan-300 pt-1 pb-1 px-3 py-3 shadow-sm" onClick={login}>{loginText}</button></li>
        </ul>
       
      </div>
    </div>
  )
} 