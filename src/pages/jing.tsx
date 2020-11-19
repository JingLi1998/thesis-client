import React from "react";
import styled from "styled-components";
import IFrame from "../components/IFrame";
import PortfolioLayout from "../layouts/PortfolioLayout";

const Grid = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  justify-items: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.75rem;
  color: var(--primary);
`;

const Jing = () => {
  return (
    <PortfolioLayout>
      <Heading>Data Aggregation and Management</Heading>
      <Grid>
        <IFrame
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/ZQuVYcs88AQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-1"
        />
        <IFrame
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/cf1xDgMzRdc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-2"
        />
        <IFrame
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/fI4RNHdD2Os"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-3"
        />
        <IFrame
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/NYW_SwFppmk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-4"
        />
        <IFrame
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/QltAINYyzlA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-5"
        />
        <IFrame
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/4gFbOoyB8wk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-6"
        />
      </Grid>
    </PortfolioLayout>
  );
};

export default Jing;
