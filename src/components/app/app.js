import React from "react";
import { render } from "react-dom";
import SampleComponent from "../../../code_samples/sample_component/sample_component"

// create the web page from components
const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <br />
        <p>App.js connected to sample component as an example.  Remove this dependency and get coding.</p>

        <h2>Configuration Steps</h2>
        <ol>
          <li>Change Title in public/index.html</li>
          <li>In .gitignore file uncomment #code_samples</li>
          <li>Decide if you want to include .gitignore in git repo and update accordingly</li>
          <li>Choose the License type you need and update LICENSE file appropriately</li>
          <li>Remove entries from CHANGELOG</li>
          <li>Update README file including badges</li>
        </ol>
        <br />
        <p>Good Luck and Happy Coding!</p>
      <SampleComponent />
    </div>
  );
};

// load the components starting with app.js which will contain all the other components
render(React.createElement(App), document.getElementById("root"));
