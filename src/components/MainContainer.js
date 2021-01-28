//copied from activity 20
import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import SearchForm from "./SearchForm";
import TableData from "./TableData";

class MainContainer extends Component {
  //   state = {
  //     result: {},
  //     search: "",
  //   };

  // sort n render name on click??

  // searched n render data on search

  //   loadData = () => {
  //     API.getData()
  //       .then((res) => console.log(res))
  //       //   this.setState({ result: res.results }))
  //       .catch((err) => console.log(err));
  //   };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <h1>"Main Container" </h1>;{/* <Col size="md-4"> */}
            <Card heading="Search">
              <SearchForm
              // value={this.state.search}
              // handleInputChange={this.handleInputChange}
              // handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
            <TableData />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContainer;
