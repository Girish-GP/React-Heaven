import React from "react"
import ReactDOM from "react-dom/client"

//React ELement

const heading = React.createElement("h1",{id:'heading'},"HI i am react");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

//Jsx

const jsxHeading = (<h1 id="heading" className="parent-class">
        This is jsx heading
        </h1>)
// root.render(jsxHeading)

console.log(heading,jsxHeading)

//React Components
//Class based components --- Old way of writing code
//Functional based components --- new way of writing code

const num1 = 100;
//React Element 
const para = <p>Hi i am react element</p>
const insideOther = (
        <p>{para}Hi i am other react element</p>
)
//React Component

const Text = () => (
        <div>
                {num1+12222}
                {console.log('rhiadfoaf')}
                <p>Hi this is functional react component paragraph</p>
                {/* <MyButton /> */}
        </div>
)

const MyButton = () => 
        (
               <div id="parent-div">
                       <h1>Hi I am react button</h1>
                       {insideOther}
                       <Text /> {/* component composition */}
                       {Text()}
               </div>
       )

root.render(<MyButton />)