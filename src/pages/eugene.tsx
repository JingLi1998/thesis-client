import React from "react";
import styled from "styled-components";
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
    </PortfolioLayout>
  );
};

export default Eugene;
