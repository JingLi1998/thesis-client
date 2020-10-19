import styled from "styled-components";
import React from "react";

const Wrapper = styled.footer`
  grid-area: footer;
`;

const Footer = () => {
  return (
    <Wrapper>
      <h2>Footer</h2>
    </Wrapper>
  );
};

export default Footer;
