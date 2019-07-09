import React from "react";
import SpeakersData from "../SpeakersData";
import SpeakerGrid from "../SpeakerGrid";

const Home = () => {
  const speakers = SpeakersData;

  return (
    <>
      <SpeakerGrid speakers={speakers} />
      {/*<Logo />
        <Banner />
        <TalkDetales />
        <Map />
        <Sponsors /> */}
    </>
  );
};

export default Home;
