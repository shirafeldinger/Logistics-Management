import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/Signup";
import LogIn from "./Components/LogIn";
import Manager from "./Components/Manager";
function App() {
  const [loggedInEmployee, setLoginEmployee] = useState(0);
  const [employees, setEmployee] = useState([]);
  const [logins, setLogin] = useState([]);
  const [products, setProducts] = useState([
    {
      productNumber: 11122,
      Name: "green box",
      needForklift: false,
    },
    {
      productNumber: 22554,
      Name: "green box",
      needForklift: false,
    },
    {
      productNumber: 66698,
      Name: "blue box",
      needForklift: true,
    },
    {
      productNumber: 78544,
      Name: "red box",
      needForklift: false,
    },
    {
      productNumber: 69875,
      Name: "red box",
      needForklift: false,
    },
  ]);

  const addEmployee = (employeeName, employeeNumber, forkliftValue) => {
    setEmployee([
      ...employees,
      {
        Number: employeeNumber,
        fullName: employeeName,
        forklift: forkliftValue,
        isPresent: true,
      },
    ]);
  };

  const loginEmplyee = (employeeNum) => {
    setLoginEmployee(employeeNum);
    setLogin([...logins, employeeNum]);
  };

  const setHandlingEmployee = (productNumber, employeeNum) => {
    const index = products.findIndex((p) => p.productNumber === productNumber);
    setProducts([
      ...products.slice(0, index),
      { ...products[index], handlingEmployee: employeeNum },
      ...products.slice(index + 1, products.length),
    ]);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/signup"
            component={() => {
              return <SignUp AddEmployee={addEmployee} employees={employees} />;
            }}
          />
          <Route
            exact
            path="/login"
            component={() => {
              return (
                <LogIn
                  employees={employees}
                  products={products}
                  setHandlingEmployee={setHandlingEmployee}
                  loggedInEmployee={loggedInEmployee}
                  loginEmployee={loginEmplyee}
                />
              );
            }}
          />
          <Route
            exact
            path="/manager"
            component={() => {
              return (
                <Manager
                  logins={logins}
                  employees={employees || []}
                  products={products}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
