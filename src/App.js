import React, { Component } from "react";
import styled from "styled-components";

// components
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        {/* <Logo />
        <Banner />
        <TalkDetales />
        <Map />
        <Sponsors />
        <Footer /> */}
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
`;
