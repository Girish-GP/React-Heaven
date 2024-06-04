// const root = document.getElementById('root');

// const h2 = document.createElement("h2")
// h2.innerHTML = "Hello World 2"
// root.appendChild(h2)


const heading = React.createElement("h1",{
    id: "heading" , xyz: "abc"
},"Hello world from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)


// {} --> here we can give attributes to the tag


console.log(heading,root)
