import SpeakersData from "../SpeakersData";
import Navbar from "../Navbar";
import SpeakerGrid from "../SpeakerGrid";
import React from "react";

const Home = () => {
  const speakers = SpeakersData;

  return (
    <>
      <Navbar />
      <SpeakerGrid speakers={speakers}/>
        {/*<Logo />
        <Banner />
        <TalkDetales />
        <Map />
        <Sponsors />
        <Footer /> */}
    </>
  );
}

export default Home;