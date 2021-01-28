import React from "react";
// import { Table } from "react-bootstrap";

//Call the API and display data (picture, name, email and dobto rows.
function TableDataBody(props) {
  console.log("Employees: ", props.employees);
  let employeeRow = props.employees.map((employee, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <img src={employee.picture.thumbnail} alt="employee photo" />
        </td>
        <td>{employee.name.first + " " + employee.name.last} </td>
        <td>{employee.email} </td>
        <td>{employee.phone} </td>
      </tr>
    );
  });
  return <tbody>{employeeRow}</tbody>;
}

export default TableDataBody;
