



import React from "react";
class UserClass extends React.Component{
  constructor(){
   super();
   console.log("constructor called.",this.props?.res?.name)
   this.state = {
    name: 'Dummy',
    userName: 'Dummy',
    role:"dummy",
    count: 0,
    price:100
   }
  }
  async componentDidMount(){
    console.log("componentDidMount",this.props?.res?.name);
    const data = await fetch('https://api.github.com/users/Girish-GP');
    const jsonData = await data.json();
    console.log(jsonData)
    this.setState({
      name: jsonData?.name,
      userName: jsonData?.userName,
      role: jsonData?.bio
    })
  }

 
  
  render(){
    console.log("render function called.",this.props?.res?.name)
    // const {name,userName,role} = this.props?.res;
    const {name,userName,role,count,price} = this.state;
    return (
      <div className="user_container">
       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
       <div className="user-info">
        <h3>{name}</h3>
        <h4>{userName}</h4>
        <p>{role}</p>
        <p>{count}</p>
        <p>{price}</p>
        <button onClick={
          ()=>{
            this.setState({
              count: this.state?.count +1,
            })
          }
        }>+</button>
        <button onClick={
          ()=>{
            this.setState({
              count: this.state?.count -1,
            })
          }
        }>-</button>
       </div> 
      </div>
    )
  }
}

export default UserClass;