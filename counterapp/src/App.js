import React, { useState } from "react";
import "./App.css";

function App() {

  const[value, setValue] = useState(0);

  const incValue = () => {
    setValue(value + 1);
  }

  const decValue = () => {
    if(value > 0){
      setValue(value - 1);
    }
    else{
      alert('Zero Limit Reached!!!!!')
      setValue(0);
    }  
  }

  const resValue = () => {
    setValue(0)
  }

  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <h1>{value}</h1>
          <div className="btn_div">
            <button onClick={incValue}>Increment</button>
            <button onClick={decValue}>Decrement</button>
            <button onClick={resValue}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
