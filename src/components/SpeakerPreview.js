import styled from "styled-components";
import React from "react";

const SpeakerPreview = ({speaker}) => {
    const {id, first_name, last_name, title, image} = speaker;

    return (
        <SpeakerDetailsLink key={id}>
            <SpeakerImage src={image} alt="speaker"/>
            <h3>{first_name + " " + last_name}</h3>
            <h4>{title}</h4>
        </SpeakerDetailsLink>
    )
};

const SpeakerDetailsLink = styled.a`
  display: block;
  text-decoration: none;
  margin: 1em;
  text-align: left;
`;

const SpeakerImage = styled.img`
  width: 40%;
  height: auto;
`;

export default SpeakerPreview;
