import React, { useState } from "react";
import "../styles/App.css";


const App = () => {

  const [shape, setShape] = useState("Square");
  const [count, setCount] = useState(0);
  
   //let count=0;
  const clickHandle = () => {
    const body = document.getElementById("shapes-holder")
    const div = document.createElement("div")  

    div.innerText = count
      div.className = shape
      body.appendChild(div)
      setCount(count+1)   
  }
  
  return (
    <div id="main">
      <div id="shape-creator">
        <select value={shape} onChange={(e) => setShape(e.target.value)}>
          <option value="Square">
            Circle
          </option>
          <option value="Circle">
            Square
          </option>
        </select>
      </div>

      <div id="shapes-holder">
        <button onClick={clickHandle}>Add Shape</button>
      </div>
      <div id="shape-">

      </div>
    </div>
  );
};

export default App;
