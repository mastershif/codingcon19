import React from "react";
import styled from "styled-components";

// components
import Navbar from "./components/Navbar";
import SpeakerGrid from "./components/SpeakerGrid";
import SpeakersData from "./components/SpeakersData";

const App = () => {
  const speakers = SpeakersData;

    return (
      <Container>
        <Navbar />
        <SpeakerGrid speakers={speakers}/>
        {/* <Logo />
        <Banner />
        <TalkDetales />
        <Map />
        <Sponsors />
        <Footer /> */}
      </Container>
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
