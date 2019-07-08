import React, { Component } from "react";
import styled from "styled-components";
import SessionsData from "../../data/SessionsData.json";

class SessionList extends Component {
  render() {
    return (
      <>
        {SessionsData.map((session, index) => {
          return (
            <>
              <Title>{session.title}</Title>
              <Speaker>{session.speaker}</Speaker>
            </>
          );
        })}
      </>
    );
  }
}

const Title = styled.h1`
  color: black;
`;
const Speaker = styled.div`
  background-color: white;
`;

export default SessionList;
