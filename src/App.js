import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const [operation, setOperation] = useState("");

  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(result);
  }, [result]);

  function clickNumbers(val) {
    if (operation == "") {
      setFirstNumber(firstNumber + val);
    } else {
      setSecondNumber(secondNumber + val);
    }
  }

  function clickOperation(val) {
    setOperation(val);
  }

  function perforOperation() {
    switch (operation) {
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "-":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "*":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "/":
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{result}</div>
        <div className="buttons">
          <div className="leftSide">
            <div id="seeResult" onClick={perforOperation}>
              See Result
            </div>
            <div className="numbers">
              {numbers.map((val, key) => {
                return (
                  <div
                    id="individualNumber"
                    onClick={() => {
                      clickNumbers(val);
                    }}
                  >
                    {" "}
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="leftSide">
            {operations.map((val, key) => {
              return (
                <div
                  id="operations"
                  onClick={() => {
                    clickOperation(val);
                  }}
                >
                  {" "}
                  {val}{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
