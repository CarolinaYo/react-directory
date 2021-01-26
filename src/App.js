import React from "react";
import Wrapper from "./components/Wrapper";

import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <MainContainer />
      </Wrapper>
    </>
  );
}

export default App;
