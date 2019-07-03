import SpeakersData from "../SpeakersData";
import Navbar from "../Navbar";
import SpeakerGrid from "../SpeakerGrid";
import React from "react";
import styled from "styled-components";

const Home = () => {
  const speakers = SpeakersData;

  return (
      <>
        <SpeakerGrid speakers={speakers}/>
        {/*<Logo />
        <Banner />
        <TalkDetales />
        <Map />
        <Sponsors /> */}
        </>
  );
}

export default Home;


