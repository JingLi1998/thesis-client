import React from "react";
import styled from "styled-components";

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 6rem;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.75rem;
  color: var(--primary);
`;

const Lakshan = () => {
  return (
    <Layout>
      <Heading>Data Capture and Transmission</Heading>
      <iframe
        width="1000"
        height="650"
        allow="fullscreen"
        src="https://cloud.anylogic.com/assets/embed?modelId=910168d7-19c9-4256-957e-b4fa3db5b969"
        title="lakshan"
        frameBorder="0"
      ></iframe>
    </Layout>
  );
};

export default Lakshan;
