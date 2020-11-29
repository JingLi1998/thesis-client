import React from "react";
import styled from "styled-components";
import IFrame from "../components/IFrame";
import PortfolioLayout from "../layouts/PortfolioLayout";

const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.75rem;
  color: var(--primary);
`;

const Eugene = () => {
  return (
    <PortfolioLayout>
      <Heading>User Experience</Heading>
      <span>
        Please view click on the fullscreen icon in the top right corner
      </span>
      <IFrame
        frameBorder="0"
        width="1000"
        height="650"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHRyZQW3S5FXgrJzv11gNzZ%2FThesis%3Fnode-id%3D2%253A0%26viewport%3D-453%252C-1143%252C0.6433259844779968%26scaling%3Dmin-zoom"
        allowFullScreen
        title="eugene"
      />
    </PortfolioLayout>
  );
};

export default Eugene;
