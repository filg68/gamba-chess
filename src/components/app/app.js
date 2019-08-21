import React from "react";
import { render } from "react-dom";

// create the web page from components
const App = () => {
  return (
    <div>
      <h1>Hello Gamba Chess!</h1>
    </div>
  );
};

// load the components starting with app.js which will contain all the other components
render(React.createElement(App), document.getElementById("root"));
