import React from "react";
import styled from "styled-components";

// components
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Schedule from "./components/pages/Schedule";
import Speakers from "./components/pages/Speakers";
import Sessions from "./components/pages/Sessions";
import Sponsors from "./components/pages/Sponsors";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
    return (
      <Router>
        <Container>
            <Content>
                <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/schedule" exact component={Schedule} />
            <Route path="/speakers" exact component={Speakers} />
            <Route path="/sessions" exact component={Sessions} />
            <Route path="/sponsors" exact component={Sponsors} />
          </Switch>
            </Content>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
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
const Content = styled.div`
   flex: 1 0 auto;
`;
const FooterWrapper = styled.div`
  flex-shrink: 0;
`;
