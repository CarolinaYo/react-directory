//copied from activity 20
import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import TableData from "./TableData";

class MainContainer extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
    sortOrder: "asc",
  };

  //Getting data from API
  getEmployees = () => {
    API.getRandomUser()
      .then((res) => {
        this.setState({ employees: res.data.results });
        // A copy of the same data for manipulation
        this.setState({ filteredEmployees: res.data.results });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getEmployees();
  }

  //Sorting by name in ascending and descending
  handleSort = (colName) => {
    let sort;
    // console.log(this.state.sortOrder);

    if (colName === "name") {
      if (this.state.sortOrder === "asc") {
        sort = this.state.filteredEmployees.sort((a, b) => {
          //   let nameA = a.name.first.toUpperCase();

          let nameA = a["name"].first.toUpperCase();
          //   let nameB = b.name.first.toUpperCase();
          let nameB = b["name"].first.toUpperCase();

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({ sortOrder: "desc" });
      } else {
        sort = this.state.filteredEmployees.sort((a, b) => {
          //   let nameA = a.name.first.toUpperCase();

          let nameA = a["name"].first.toUpperCase();
          //   let nameB = b.name.first.toUpperCase();
          let nameB = b["name"].first.toUpperCase();

          if (nameA > nameB) {
            return -1;
          } else if (nameA < nameB) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({ sortOrder: "asc" });
      }
    } else {
      //Sorting by email in ascending and descending
      if (this.state.sortOrder === "asc") {
        sort = this.state.filteredEmployees.sort((a, b) => {
          let nameA = a.email;
          let nameB = b.email;

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({ sortOrder: "desc" });
      } else {
        sort = this.state.filteredEmployees.sort((a, b) => {
          let nameA = a.email;
          let nameB = b.email;

          if (nameA > nameB) {
            return -1;
          } else if (nameA < nameB) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({ sortOrder: "asc" });
      }
    }

    this.setState({ filteredEmployees: sort });
  };

  //Filter data on value change
  handleInputChange = (event) => {
    const filter = event.target.value;
    //Store value in search state
    this.setState({ search: filter });
    if (!filter) {
      //Calling original data when nothing in the value
      this.setState({ filteredEmployees: this.state.employees });
    } else {
      //Show data using filter method
      const filteredList = this.state.filteredEmployees.filter((item) => {
        let values = item.name.first.toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
      });

      this.setState({ filteredEmployees: filteredList });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
            <Card heading="Search">
              <TableData
                employees={this.state.filteredEmployees}
                onSort={this.handleSort}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContainer;
