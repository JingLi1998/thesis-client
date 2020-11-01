import styled from "styled-components";
import Spinner from "./Spinner";
import React from "react";

const Wrapper = styled.div`
  width: 24rem;
`;

const SmallSpinner = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);

export default SmallSpinner;
