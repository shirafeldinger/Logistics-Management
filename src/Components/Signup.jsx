import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function Signup(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [forklift, setForklift] = useState("no");
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  return (
    <div id="SignUp">
      <h2>Sign up</h2>
      <div id="NO">
        <label>Employee Number:</label>
        <input
          type="number"
          onChange={(e) => {
            if (e.target.value.length !== 5) {
              document.getElementById("p-number").innerHTML =
                "the number must be with 5 digits.";
            } else {
              document.getElementById("p-number").innerHTML = "";
              setNumberIsValid(true);
            }
            setNumber(e.target.value);
          }}
        />
        <p className="signup-p" id="p-number"></p>
      </div>

      <div id="full-name">
        {" "}
        <label>Full name:</label>
        <input
          type="text"
          onChange={(e) => {
            if (
              !/^[A-Za-z]+/.test(e.target.value) ||
              e.target.value.length < 4
            ) {
              document.getElementById("p-name").innerHTML =
                "the name must contain minimum 4 characters. ";
            } else {
              document.getElementById("p-name").innerHTML = "";
              setNameIsValid(true);
            }
            setName(e.target.value);
          }}
        />
        <p className="signup-p" id="p-name"></p>
      </div>

      <div id="forklift">
        <label>Forklift truck</label>
        <input
          type="radio"
          name="radio"
          value="yes"
          onChange={(e) => {
            setForklift(e.target.value);
          }}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="radio"
          checked="checked"
          value="no"
          onChange={(e) => {
            setForklift(e.target.value);
          }}
        />
        <label>No</label>
      </div>

      <div id="sign-up-buttons">
        <button
          className="buttons"
          onClick={() => {
            if (numberIsValid === true && nameIsValid === true) {
              props.AddEmployee(name, number, forklift);
              alert("You signed in");
            } else {
              alert("ERROR");
            }
          }}
        >
          Create
        </button>

        <Link className="buttons" to="/">
          Back
        </Link>
      </div>
    </div>
  );
}
