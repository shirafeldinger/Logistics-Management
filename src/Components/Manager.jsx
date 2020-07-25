import React, { useState } from "react";
import "./Manager.css";
import { Link } from "react-router-dom";

export default function Manager(props) {
  const calcTable = (logins, employees, products) => {
    let loginCount = logins.reduce((acc, empNum) => {
      acc[empNum] = acc[empNum] || 0;
      acc[empNum]++;
      return acc;
    }, {});

    let handlingCount = products.reduce((acc, product) => {
      acc[product.handlingEmployee] = acc[product.handlingEmployee] || 0;
      acc[product.handlingEmployee]++;
      return acc;
    }, {});

    return employees.map((emp) => ({
      ...emp,
      countLogins: loginCount[emp.Number],
      countProducts: handlingCount[emp.Number],
    }));
  };

  const renderTableData = () => {
    const tableData = calcTable(props.logins, props.employees, props.products);

    return tableData.map((emp) => (
      <tr key={emp.Number}>
        <td>{emp.Number}</td>
        <td>{emp.fullName}</td>
        <td>{emp.countLogins}</td>
        <td>{emp.countProducts}</td>
      </tr>
    ));
  };

  return (
    <div id="manager">
      <h1>Manager</h1>

      <table id="manager-table">
        <tbody>
          <tr>
            <td>No</td>
            <td>FullName</td>
            <td>Counter</td>
            <td>Number of Products</td>
          </tr>
          {renderTableData()}
        </tbody>
      </table>

      <Link className="buttons" to="/">
        Log out
      </Link>
    </div>
  );
}
