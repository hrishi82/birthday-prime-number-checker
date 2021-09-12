import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState({
    name: "",
    dob: ""
  });

  const [output, setOutput] = useState("");

  function changeHandler(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  function dateFormatter(input) {
    var dt = input.dob.split("-");
    var day = dt[1];
    var month = dt[2];

    var formattedDate = Number(day + month);
    return formattedDate;
  }

  function check() {
    var formattedDate = dateFormatter(input);

    var flag = true;

    if (formattedDate <= 1) {
      setOutput("Enter valid Date");
    } else {
      for (let i = 2; i < formattedDate; i++) {
        if (formattedDate % i === 0) {
          flag = false;
        }
      }
    }

    if (flag === true) {
      setOutput(` Hello ${input.name}! Your birthday is a Prime number!`);
    } else {
      setOutput(` Hello ${input.name}! Your birthday is not a Prime number.`);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Is your birth day a prime number?</h1>
        <p className="headinPara">
          Fill in your name and date of birth to check if your birthday is a
          prime number
        </p>

        <input
          type="text"
          value={input.name}
          name="name"
          onChange={changeHandler}
          className="input-box"
          placeholder="Enter your name"
        />

        <input
          type="date"
          value={input.dob}
          name="dob"
          onChange={changeHandler}
          className="input-box"
          placeholder="Please select your birth date"
        />

        <button type="submit" className="submit-btn" onClick={check}>
          Submit
        </button>

        <div className="outp">{output}</div>
      </div>
    </div>
  );
}
