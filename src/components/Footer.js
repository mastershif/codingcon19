import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <footer>
            <Container>
                <FooterContent>
                    <p>Some footer content</p>
                </FooterContent>
            </Container>
        </footer>
    );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  background: #00695c;
  display: flex;
  box-sizing: border-box;
`;
const FooterContent = styled.p`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
`;
