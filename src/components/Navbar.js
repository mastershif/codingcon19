import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
// import Button from "./common/Button";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <MenuItem>CodingCon19</MenuItem>
          <MenuItem><MenuItemLink to="/about">About</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/schedule">Schedule</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/speakers">Speakers</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/sessions">Sessions</MenuItemLink></MenuItem>
          <MenuItem><MenuItemLink to="/sponsors">Sponsors</MenuItemLink></MenuItem>
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
const MenuItemLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const MenuItem = styled.li`
  padding: 1em;
`;
