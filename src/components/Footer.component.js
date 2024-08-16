import DummyContext from "../utils/DummyContext"
import { useContext } from "react"
const FooterComponent = () => {
 const {project} = useContext(DummyContext)
 return (
    <div id="app-footer" className="footer">
     <p>Copyright</p>
     <p>Project: {project}</p>
    </div>
)
}


export default FooterComponent