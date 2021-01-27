import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
import SearchForm from "./SearchForm";
import DataTable from "./DataTable";
import API from "../utils/API";

class MainContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  loadData = () => {
    API.getData()
      .then((res) => console.log(res))
      //   this.setState({ result: res.results }))
      .catch((err) => console.log(err));
  };

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
            <DataTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContainer;
