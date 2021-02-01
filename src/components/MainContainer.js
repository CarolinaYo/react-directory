//copied from activity 20
import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import TableData from "./TableData";

class MainContainer extends Component {
  state = {
    employees: [],
    search: "",
  };

  // sort n render name on click??

  getEmployees = () => {
    API.getRandomUser()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getEmployees();
  }

  handleSortbyName = (event) => {
    const sort = this.state.employees.sort((a, b) => {
      let nameA = a.name.first.toUpperCase();
      let nameB = b.name.first.toUpperCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({ employees: sort });
  };

  searchEmployees = (query) => {
    API.getRandomUser(query)
      .then((res) => this.setState({ search: res.data.results }))
      .catch((err) => console.log(err));
  };
  // searched n render data on button click
  //   handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     this.searchEmployees(this.state.search);
  //   };

  //filter data on value change
  handleInputChange = (event) => {
    const filter = event.target.value;
    const filteredList = this.state.employees.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLwerCase()) !== -1;
    });
    this.setState({ employees: filteredList });
    //filtering
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
            <Card heading="Search" handleSortByName={this.handleSortbyName}>
              <TableData employees={this.state.employees} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContainer;
