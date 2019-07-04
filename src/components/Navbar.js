import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../images/banner4.png";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <BannerContainer>
          <NavbarBanner>
            <Link to="/">
              <Banner src={banner} alt="CodingCon19" />
            </Link>
          </NavbarBanner>
        </BannerContainer>

        <MenuContainer>
          <MenuItem>
            <MenuItemLink to="/about">About</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/schedule">Schedule</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/speakers">Speakers</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/sessions">Sessions</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/sponsors">Sponsors</MenuItemLink>
          </MenuItem>
        </MenuContainer>
      </Container>
    );
  }
}

export default Navbar;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;
const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const MenuContainer = styled.li`
  display: flex;
  color: #222;
  list-style: none;
`;
const MenuItemLink = styled(Link)`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  padding: 20px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  transition: all 300ms;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`;
const NavbarBanner = styled.a`
  padding: 1em;
`;
const MenuItem = styled.li`
  padding: 1em;
`;
const Banner = styled.img`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  width: 30vw;
`;
