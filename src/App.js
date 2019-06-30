import React from "react";
import styled from "styled-components";

// components
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import SpeakerGrid from "./components/SpeakerGrid";
import SpeakersData from "./components/SpeakersData";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Sessions from "./components/pages/Sessions";

const App = () => {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sessions" exact component={Sessions} />
          </Switch>
        </Container>
      </Router>
    );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
`;
