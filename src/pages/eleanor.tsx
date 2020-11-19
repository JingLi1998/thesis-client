import React from "react";
import styled from "styled-components";
import IFrame from "../components/IFrame";
import PortfolioLayout from "../layouts/PortfolioLayout";

const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.75rem;
  color: var(--primary);
`;

const Eleanor = () => {
  return (
    <PortfolioLayout>
      <Heading>Investment Analysis Model</Heading>
      <IFrame
        width="1000"
        height="650"
        allow="fullscreen"
        src="https://cloud.anylogic.com/assets/embed?modelId=34ca479b-a066-4c92-824c-eadd80a57598"
        title="eleanor"
        frameBorder="0"
      />
    </PortfolioLayout>
  );
};

export default Eleanor;
