import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  height: 100%;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  justify-items: center;
`;

const Heading = styled.h1`
  font-weight: 500;
  color: var(--primary);
`;

const Simulation = () => {
  return (
    <Layout>
      <Heading>Simulation Videos</Heading>
      <Grid>
        <iframe
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/cf1xDgMzRdc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-2"
        ></iframe>
        <iframe
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/fI4RNHdD2Os"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-3"
        ></iframe>
        <iframe
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/NYW_SwFppmk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-4"
        ></iframe>
        <iframe
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/QltAINYyzlA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-5"
        ></iframe>
        <iframe
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/4gFbOoyB8wk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtube-6"
        ></iframe>
      </Grid>
    </Layout>
  );
};

export default Simulation;
