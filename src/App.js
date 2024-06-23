import React from "react"
import ReactDOM from "react-dom/client"
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { HeaderComponent } from "./components/Header.component"
import { BodyComponent } from "./components/Body.component"
import FooterComponent from "./components/Footer.component"

const AppLayout = () => (
        <div id="app-layout">
          {/* Header */}
          <HeaderComponent />
          {/* Body */}
          <BodyComponent />
          {/* Footer */}
          <FooterComponent />
        </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>)
