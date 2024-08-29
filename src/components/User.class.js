import UserContext from "../utils/UserContext";
import DummyContext from "../utils/DummyContext";
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called.", this.props?.res?.name);
    this.state = {
      name: "Dummy",
      userName: "Dummy",
      role: "dummy",
      count: 0,
      price: 100,
    };
  }
  async componentDidMount() {
    console.log("componentDidMount", this.props?.res?.name);
    const data = await fetch("https://api.github.com/users/Girish-GP");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      name: jsonData?.name,
      userName: jsonData?.userName,
      role: jsonData?.bio,
    });
    // this.interval = setInterval(() => {
    //   console.log("HI");
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state?.name !== prevState?.name) {
      //fetch data name call
    }

    if (this.state?.userName !== prevState?.userName) {
      //fetch userName
    }
    console.log("component did update", this.state?.name);
  }

  componentWillUnmount() {
    // clearInterval(this.interval)
    console.log("Component Will unmount", this.state?.name);
  }

  render() {
    console.log("render function called.", this.props?.res?.name);
    // const {name,userName,role} = this.props?.res;
    const { name, userName, role, count, price } = this.state;
    return (
      <div className="w-80 h-[500px] flex flex-col gap-1 border-2 rounded-2xl pb-2 mt-2 shadow-2xl">
        <img
          className="w-full h-2/3 rounded-2xl"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
        ></img>
        <div className="px-2">
          <h3 className="font-medium">{name}</h3>
          <h3 className="font-medium">{userName}</h3>
          <p>{role}</p>
          <p>{count}</p>
          <p>{price}</p>
          <p>
            loggedIn User :
            <UserContext.Consumer>
              {(data) => data?.loggedInUser}
            </UserContext.Consumer>
          </p>
          <p>
            <DummyContext.Consumer>
              {(data) => data?.project}
            </DummyContext.Consumer>
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          <button
            className="border-none bg-gray-200 shadow-lg w-12 p-1"
            onClick={() => {
              this.setState({
                count: this.state?.count + 1,
              });
            }}
          >
            +
          </button>
          <button
            className="border-none bg-gray-100 shadow-lg w-12 p-1"
            onClick={() => {
              this.setState({
                count: this.state?.count - 1,
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
