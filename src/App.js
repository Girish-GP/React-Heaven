import React,{lazy,Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { HeaderComponent } from "./components/Header.component"
import { BodyComponent } from "./components/Body.component"
import FooterComponent from "./components/Footer.component"
import AboutUsComponent from "./components/aboutUs.component";
import ContactUsComponent from "./components/contactUs.component";
import CardComponent from "./components/cart.component";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ErrorComponent from "./components/Error.component";
import RestuarantViewDetails from "./components/Restuarant.view.details.component";
import UserContext from "./utils/UserContext";
import DummyContext from "./utils/DummyContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import('./components/Grocery'));
// console.log(Grocery)
const AppLayout = () => {
  
  const [userName,setUserName]=useState('');

  //make authentication call
  useEffect(()=>{
    const data = {
      name: "Girish Parulekar"
    }
    // setUserName(data?.name)
    setUserName('')
  },[])
  return (
<UserContext.Provider value={{loggedInUser:userName, setUserName:(val)=> setUserName(val)}}>
<div id="app-layout">
          {/* Header */}
          {/* <UserContext.Provider value={{loggedInUser:'Elon Musk'}}> */}

          <HeaderComponent />
          {/* </UserContext.Provider> */}
          {/* Dynamic Rendering */}
          <Outlet/>
          {/* Footer */}
          <DummyContext.Provider value={{project:'test'}}>
            <FooterComponent />
          </DummyContext.Provider>  
        </div>
</UserContext.Provider>
        
)}

const appRoutes = createBrowserRouter([
  {
    path: "",
    element: <AppLayout/>,
    errorElement:<ErrorComponent/>,
    children: [ 
      {
       path:"",
       element:<BodyComponent/>
      },
      {
      path: "/about",
      element:<AboutUsComponent/>
    },
    {
      path: "/contact-us",
      element:<ContactUsComponent/>
    },
    {
      path: "/cart",
      element: <CardComponent/>
    },
    {
      path:"/grocery",
      element: <Suspense fallback={<div>Loading....</div>}><Grocery/></Suspense>
    },
    {
      path:"/restaurant/:resId",
      element: <RestuarantViewDetails/>
    }
  ]
  },
 
  // {
  //   path:"*",
  //   element: <ErrorComponent/>,
  // }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoutes} />)





