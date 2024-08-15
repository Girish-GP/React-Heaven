import UserComponent from "./User.component";
import UserClass from "./User.class";
const AboutUsComponent = () =>{
    const data ={
        name: "Girish Parulekar",
        userName: "Girish-P",
        role:"Frontend Web Developer"
    }
    const data1 ={
        name: "XYZ",
        userName: "Girish-P",
        role:"Frontend Web Developer"
    }
    const data2 ={
        name: "Third",
        userName: "Girish-P",
        role:"Frontend Web Developer"
    }
    return (
        <div className="p-4 mt-2">
              <h1 className="font-bold text-2xl">About Team</h1>
              <div className="flex gap-4">
                  
                  {/* {
                   [1,2,3,4,5].map((obj)=>{
                      return <UserComponent key={obj} res={data}/>
                   })
                  } */}
                  <UserClass res={data}/>
                  <UserClass res={data1}/>
                  <UserClass res={data2}/>
          </div>
        </div>
       
    )
}

export default AboutUsComponent;





