// const root = document.getElementById('root');

// const h2 = document.createElement("h2")
// h2.innerHTML = "Hello World 2"
// root.appendChild(h2)

// const heading = React.createElement("h1",{
//     id: "heading" , xyz: "abc"
// },"Hello world from react");


// root.render(heading)


// {} --> here we can give attributes to the tag


// console.log(heading,root)

//How to create below structure in react
//Nested structure in react
/* <div id="parent">
        <div id="child">
<h1>Hello nested tree using react</h1>
        </div>
        <h1>Hi i am sibling</h1>
        </div>
     </div> */

     const parent = React.createElement("div",{
        id: 'parent'
     },[React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello nested tree using react"),React.createElement("h1",{},"Hi i am sibling")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Hello nested tree using react 2"),React.createElement("h1",{},"Hi i am sibling 2")])]);

    
     const root = ReactDOM.createRoot(document.getElementById("root"));

     root.render(parent);

     console.log(parent)


//JSX
  


const parentDiv= React.createElement('div',{id:'parent-div'},React.createElement('p',{id:'para'},"This is para"))

root.render(parentDiv)