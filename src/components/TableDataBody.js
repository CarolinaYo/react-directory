import React from "react";

//Call the API and display data (picture, name, email and ph rows.
function TableDataBody(props) {
  // console.log("Employees: ", props.employees);
  let employeeRow = props.employees.map((employee, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <img
            src={employee.picture.thumbnail}
            alt={"employee" + index + " photo"}
          />
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
