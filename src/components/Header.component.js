import { LOGO_URL } from "../utils/constants"
export const HeaderComponent = () => (
    <div id="app-header" className="header">
      <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
         <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li>Cart</li>
         </ul>
      </div>
    </div>
 )