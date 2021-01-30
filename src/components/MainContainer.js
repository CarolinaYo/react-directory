//copied from activity 20
import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import TableData from "./TableData";

class MainContainer extends Component {
  state = {
    employees: [],
    order: "ascend",
    search: "",
  };

  // sort n render name on click??

  // searched n render data on search

  getEmployees = () => {
    API.getRandomUser()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getEmployees();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <SearchForm
            // value={this.state.search}
            // handleInputChange={this.handleInputChange}
            // handleFormSubmit={this.handleFormSubmit}
            />
            <Card heading="Search">
              <TableData employees={this.state.employees} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContainer;
