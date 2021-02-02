import React from "react";
import { Table } from "react-bootstrap";
import TableDataBody from "./TableDataBody";

function TableData(props) {
  return (
    <div className="text-center">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th
              onClick={() => props.onSort("name")}
              style={{ cursor: "pointer" }}
            >
              Name
            </th>
            <th
              onClick={() => props.onSort("email")}
              style={{ cursor: "pointer" }}
            >
              Email
            </th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <TableDataBody employees={props.employees} />
      </Table>
    </div>
  );
}

export default TableData;
