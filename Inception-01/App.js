//This is my JS code


// const heading = document.createElement("h1");
// const root = document.getElementById("root");
// heading.innerHTML = "Hello World!";
// root.appendChild(heading);


// Now this is pure React Code

{/* <div className="grand-parent">
    <div className="parent1">This is child1</div>
    <div className="parent2">This is child2</div>
</div> */}


const element = React.createElement("div", { className: "grand-parent" }, [
    React.createElement("div", { className: "parent1" }, "This is child1"),
    React.createElement("div", { className: "parent2" }, "This is child2")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
