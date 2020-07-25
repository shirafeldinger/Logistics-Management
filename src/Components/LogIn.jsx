import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

export default function LogIn(props) {
  const [employeeNum, setEmployeeNum] = useState("");
  const [flag, setFlag] = useState(false);

  const checkEmployee = () => {
    let matchEmployee = props.employees.find(
      (employee) => employee.Number === employeeNum
    );

    if (!matchEmployee) {
      alert(`Employee Number ${employeeNum} doesn't exist`);
    } else {
      props.loginEmployee(matchEmployee.Number);
    }
  };

  let loggedInEmployee = props.employees.find(
    (em) => em.Number === props.loggedInEmployee
  );

  const showManager = () => {
    if (flag) {
      return (
        <Link className="buttons" to="/manager">
          manager
        </Link>
      );
    }
  };
  return (
    <div id="log-in">
      <h2>Login</h2>

      <div id="input-div">
        {" "}
        <label>NO:</label>
        <input
          type="text"
          onChange={(e) => {
            setEmployeeNum(e.target.value);
          }}
        />
      </div>
      {showManager()}

      <div id="login-buttons">
        {" "}
        <button
          className="buttons"
          onClick={() => {
            if (employeeNum === "99999") {
              setFlag(true);
            } else {
              return checkEmployee();
            }
          }}
        >
          Enter
        </button>
        <Link className="buttons" to="/">
          Log out
        </Link>
      </div>

      {loggedInEmployee && (
        <div>
          <h1>Welcome {loggedInEmployee.fullName}</h1>
          <h4>Details:</h4>
          <p>Full Name : {loggedInEmployee.fullName}</p>
          <p>NO: {loggedInEmployee.Number}</p>
          <p>Forklift truck license: {loggedInEmployee.forklift}</p>

          <div>
            {" "}
            <h2>List of Products:</h2>
            {props.products
              .filter((p) => !p.handlingEmployee)
              .map((product) => {
                return (
                  <div key={product.productNumber} className="product-box">
                    <p>Product Number: {product.productNumber}</p>
                    <p>Name : {product.Name}</p>
                    <p>
                      Need forklift truck: {product.needForklift.toString()}
                    </p>{" "}
                    <button
                      className="buttons"
                      onClick={() => {
                        if (
                          product.needForklift &&
                          loggedInEmployee.forklift === "no"
                        ) {
                          alert("need forklift license");
                        } else {
                          props.setHandlingEmployee(
                            product.productNumber,
                            loggedInEmployee.Number
                          );
                        }
                      }}
                    >
                      Update
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
