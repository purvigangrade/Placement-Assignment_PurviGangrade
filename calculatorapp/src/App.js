import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from 'mathjs';

function App() {
const [text, setText] = useState("");
const [result, setResult] = useState("");

const addToText = (val) => {
  setText((text) => [...text , val + ' ']);
}
const reset = () => {
  setText('');
  setResult('');
}

const calculateResult = () => {
  const input = text.join(""); //Remove commas
  setResult(math.evaluate(input));
}

  return (
    <div className="App">
      <h1 className="heading"> Calculator </h1>
      <div className="calc-wrapper">
      <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7" handleClick = {addToText} />
          <Button symbol="8" handleClick = {addToText} />
          <Button symbol="9" handleClick = {addToText}/>
          <Button symbol="/" color="#f2a33c" handleClick = {addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick = {addToText}/>
          <Button symbol="5" handleClick = {addToText}/>
          <Button symbol="6" handleClick = {addToText}/>
          <Button symbol="*" color="#f2a33c" handleClick = {addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick = {addToText}/>
          <Button symbol="2" handleClick = {addToText}/>
          <Button symbol="3" handleClick = {addToText}/>
          <Button symbol="+" color="#f2a33c" handleClick = {addToText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick = {addToText}/>
          <Button symbol="." handleClick = {addToText}/>
          <Button symbol="=" handleClick={calculateResult}/>
          <Button symbol="-" color="#f2a33c" handleClick = {addToText}/>
        </div>
        <Button symbol="Clear" color="red" handleClick={reset}/>
      </div>
    </div>
  );
}

export default App;
