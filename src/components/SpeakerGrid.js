import SpeakerPreview from "./SpeakerPreview";
import styled from "styled-components";
import React from "react";

const SpeakerGrid = ({ speakers }) => {
    return (
        <SpeakerGridContainer>
            {speakers.map(speaker => <SpeakerPreview speaker={speaker}/>)}
        </SpeakerGridContainer>
    )
};

const SpeakerGridContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  padding: 5em;
  flex-wrap: wrap;
  column-gap: 1em;
  row-gap: 1em;
`;

export default SpeakerGrid;