import React from "react";
import DataBody from "./DataBody";

function DataTable(props) {
  return (
    <div className="text-center">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <DataBody />
        {/* <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody> */}
      </Table>
      {/* <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: "0 auto" }}
      />
      <h3>Director(s): {props.director}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3> */}
    </div>
  );
}

export default DataTable;
