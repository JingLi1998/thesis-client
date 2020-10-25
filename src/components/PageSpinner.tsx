import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;
  width: 100%;
  height: 100%;
`;

const PageSpinner = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default PageSpinner;
