import {useState} from "react"

const UserComponent = (props) =>{
    const [data,setData]=useState('2')
    const {name,userName,role} = props?.res;
    return (
        <div className="user_container">
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
           <div className="user-info">
            <h3>{name}</h3>
            <h4>{userName}</h4>
            <p>{role}</p>
            <p>{data}</p>
           </div>
        </div>
    )
}

export default UserComponent;