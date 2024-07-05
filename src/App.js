import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
      // Add to history
      setHistory((prevHistory) => [
        ...prevHistory,
        { calculation: input, result },
      ]);
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleMemoryAdd = () => {
    setMemory(parseFloat(input));
    setInput("");
  };

  const handleMemorySubtract = () => {
    setMemory((prevMemory) => prevMemory - parseFloat(input));
    setInput("");
  };

  const handleMemoryRecall = () => {
    setInput(memory !== null ? memory.toString() : "");
  };

  const handleTrigFunction = (func) => {
    try {
      const result = Math[func](eval(input));
      setInput(result.toString());
      // Add trigonometric calculation to history
      setHistory((prevHistory) => [
        ...prevHistory,
        { calculation: `${func}(${input})`, result },
      ]);
    } catch (error) {
      setInput("Error");
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      {showHistory && (
        <div className="history">
          <h3>History</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.calculation} = {item.result}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="buttons">
        <button onClick={() => handleClick("7")} className="button number">
          7
        </button>
        <button onClick={() => handleClick("8")} className="button number">
          8
        </button>
        <button onClick={() => handleClick("9")} className="button number">
          9
        </button>
        <button onClick={() => handleClick("+")} className="button operator">
          +
        </button>
        <button onClick={() => handleClick("4")} className="button number">
          4
        </button>
        <button onClick={() => handleClick("5")} className="button number">
          5
        </button>
        <button onClick={() => handleClick("6")} className="button number">
          6
        </button>
        <button onClick={() => handleClick("-")} className="button operator">
          -
        </button>
        <button onClick={() => handleClick("1")} className="button number">
          1
        </button>
        <button onClick={() => handleClick("2")} className="button number">
          2
        </button>
        <button onClick={() => handleClick("3")} className="button number">
          3
        </button>
        <button onClick={() => handleClick("*")} className="button operator">
          *
        </button>
        <button onClick={() => handleClick("0")} className="button number">
          0
        </button>
        <button onClick={() => handleClick(".")} className="button number">
          .
        </button>
        <button onClick={handleCalculate} className="button equal">
          =
        </button>
        <button onClick={() => handleClick("/")} className="button operator">
          /
        </button>
        <button onClick={handleClear} className="button clear">
          DEL
        </button>
        <button onClick={handleMemoryAdd} className="button memory">
          M+
        </button>
        <button onClick={handleMemorySubtract} className="button memory">
          M-
        </button>
        <button onClick={handleMemoryRecall} className="button memory">
          MR
        </button>
        <button
          onClick={() => handleTrigFunction("sin")}
          className="button function"
        >
          sin
        </button>
        <button
          onClick={() => handleTrigFunction("cos")}
          className="button function"
        >
          cos
        </button>
        <button
          onClick={() => handleTrigFunction("tan")}
          className="button function"
        >
          tan
        </button>
        <button onClick={toggleHistory} className="button history">
          {showHistory ? "Hide History" : "Show History"}
        </button>
      </div>
    </div>
  );
};

export default Calculator;
