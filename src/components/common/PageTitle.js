import React, { Component } from "react";
import styled from "styled-components";

const PageTitle = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 4em;
  letter-spacing: 3px;
  text-align: center;
  color: #61d9fb;
`;
const Container = styled.section`
  padding: 4em;
  margin: 1rem;
  background: #222;
`;

export default PageTitle;
