import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, className }) => (
  <Container onClick={onClick} className={className}>
    {children}
  </Container>
);

export default Button;

const Container = styled.div`
  width: 120px;
  height: 40px;
  background: blue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all 300ms;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`;
