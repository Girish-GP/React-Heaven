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
    <div id="app-header" className="flex px-4 border-b-2 shadow-lg">
      <div className="logo-container">
          <img className="w-28" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between gap-8">   
               <li>Online Status: {onlineStatus? 'Online' : 'Offline'}</li>

               <li><Link to="">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact-us">Contacts</Link></li>
               <li><Link to="/cart">Cart</Link></li>
               <li><Link to="/grocery">Grocery</Link></li>
               <li><button className="login-btn cursor-pointer" onClick={login}>{loginText}</button></li>
        </ul>
       
      </div>
    </div>
  )
} 