import styled from "styled-components";
import React from "react";

const Wrapper = styled.nav`
  grid-area: navbar;
  height: 4rem;
  padding: 0 2.25rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: var(--primary);
  font-weight: 700;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <span>Home Page</span>
    </Wrapper>
  );
};

export default Navbar;
