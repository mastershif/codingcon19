import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import Sessions from "./pages/Sessions";
import App from "../App";
import Home from "./pages/Home";
// import Button from "./common/Button";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <MenuItem>CodingCon19</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Schedule</MenuItem>
          <MenuItem>Speakers</MenuItem>
          <MenuItem><Link to="/sessions">Sessions</Link></MenuItem>
          <MenuItem>Sponsors</MenuItem>
        </Menu>
      </Container>
    );
  }
}

export default Navbar;

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  background: #00a798;
  display: flex;
  box-sizing: border-box;
`;
const Menu = styled.ul`
  color: #fff;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const MenuItem = styled.li`
  padding: 1em;
`;
