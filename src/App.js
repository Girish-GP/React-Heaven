import React from "react"
import ReactDOM from "react-dom/client"
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { HeaderComponent } from "./components/Header.component"
import { BodyComponent } from "./components/Body.component"
import FooterComponent from "./components/Footer.component"
import AboutUsComponent from "./components/aboutUs.component";
import ContactUsComponent from "./components/contactUs.component";
import CardComponent from "./components/cart.component";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const AppLayout = () => (
        <div id="app-layout">
          {/* Header */}
          <HeaderComponent />
          {/* Body */}
          <RouterProvider router={appRoutes} />
          {/* Footer */}
          <FooterComponent />
        </div>
)

const appRoutes = createBrowserRouter([
  {
    path: "",
    element: <BodyComponent/>
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
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>)
