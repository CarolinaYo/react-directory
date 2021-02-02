import React from "react";
import { Table } from "react-bootstrap";
import TableDataBody from "./TableDataBody";

function TableData(props) {
  // const onSort = props;
  return (
    <div className="text-center">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th onClick={() => props.onSort("name")}>Name</th>
            <th onClick={() => props.onSort("email")}>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <TableDataBody employees={props.employees} />
      </Table>
    </div>
  );
}

export default TableData;
