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
  width: 100%;
  display: flex;  
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-sizing: border-box;
`;

export default SpeakerGrid;