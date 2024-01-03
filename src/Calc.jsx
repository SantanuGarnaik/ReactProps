import React, { useState } from "react";

const Calc = () => {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    const input_value = e.target.value;
    setInputValue(input_value);
  };

  const handleInput = (value) => {
    if (value === "C") {
      setValue("");
      setInputValue("");
    } else {
      setInputValue((preValue) => preValue + value);
    }
  };

  const handleEqual = () => {
    const equalto = eval(inputValue);
    setValue(equalto);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: 400,
          width: 400,
          backgroundColor: "lightgrey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: 10,
        }}
      >
        <input
          value={inputValue}
          onChange={inputChange}
          style={{
            height: 40,
            fontSize: 20,
            paddingLeft: 10,
            paddingRight: 10,
            textAlign: "right",
          }}
        />
        <div
          style={{
            height: 50,
            fontSize: 25,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "lightcyan",
            marginTop: 10,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {value}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("1")}
          >
            1
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("2")}
          >
            2
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("3")}
          >
            3
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("+")}
          >
            +
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("4")}
          >
            4
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("5")}
          >
            5
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("6")}
          >
            6
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("-")}
          >
            -
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("7")}
          >
            7
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("8")}
          >
            8
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("9")}
          >
            9
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("*")}
          >
            *
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("0")}
          >
            0
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("C")}
          >
            C
          </button>
          <button style={{ padding: 10, width: 80 }} onClick={handleEqual}>
            =
          </button>
          <button
            style={{ padding: 10, width: 80 }}
            onClick={() => handleInput("/")}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
