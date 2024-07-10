import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div id="app-header" className="header">
      <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
               <li><Link to="">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact-us">Contacts</Link></li>
               <li><Link to="/cart">Cart</Link></li>

        </ul>
        <button className="login-btn cursor-pointer" onClick={login}>{loginText}</button>
      </div>
    </div>
  )
} 