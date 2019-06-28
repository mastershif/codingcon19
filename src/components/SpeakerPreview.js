import styled from "styled-components";
import React from "react";

const SpeakerPreview = ({speaker}) => {
    const {id, first_name, last_name, title, image} = speaker;

    return (
        <SpeakerDetailsLink key={id}>
            <img src={image} alt="speaker"/>
            <h2>{first_name}</h2><h2>{last_name}</h2>
            <h3>{title}</h3>
        </SpeakerDetailsLink>
    )
};

const SpeakerDetailsLink = styled.a`
  display: block;
  text-decoration: none;
  margin-bottom: 25px;
`;

export default SpeakerPreview;
