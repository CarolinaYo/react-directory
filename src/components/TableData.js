import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { render } from "react-dom";
import API from "../utils/API";

import TableDataBody from "./TableDataBody";

class TableData extends Component {
  state = {
    employees: [],
  };

  conponentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
    API.getRandomUser().then((response) => {
      return this.setState({ employees: response.data.results });
    });
  }

  render() {
    return (
      <div className="text-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <TableDataBody employees={this.state.employees} />
        </Table>
      </div>
    );
  }
}

export default TableData;
