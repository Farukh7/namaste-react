import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML-Like or XML-Like syntax

// JSX (transpiled before it reaches as the JS engine) - PARCEL - Babel

// JSX => Babel transpiled it to React.createElement => REactELement - JS Object => HTMLElement(render)

const elem = <span>React Element</span>

const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);


// React Components
// Class Based Components - OLD Way writing code
// Functional Based Components - NEW Way writing code

// React Functional Component

const fun = () => {
  return true;
};


const number = 1000;
// Component Composition
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent></HeadingComponent>);
