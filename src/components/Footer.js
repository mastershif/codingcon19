import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitterSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookSquare, faTwitterSquare);

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="mailto:codingcon19@gmail.com">Contact</FooterLink>
            <FooterLink href="#">Code of Conduct</FooterLink>
          </FooterSection>
          <FooterSection>
            <FooterSocialLink href="www.twitter.com/codingcon19">
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </FooterSocialLink>
            <FooterSocialLink href="#">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </FooterSocialLink>
          </FooterSection>
        </FooterContent>
      </Container>
    </footer>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  background: #222;
  box-sizing: border-box;
  padding: 2em;
`;
const FooterContent = styled.div`
  justify-content: space-around;
  color: #fff;
  display: flex;
  margin: auto;
`;
const FooterLink = styled.a`
  letter-spacing: 4px;
  font-size: 125%;
  padding: 0.5em;
  display: flex;
  color: #6db8f9;

  &:hover {
    color: white;
  }
`;
const FooterSocialLink = styled(FooterLink)`
  font-size: 200%;
`;
const FooterSection = styled.div`
  /* flex-direction: column; */
`;
