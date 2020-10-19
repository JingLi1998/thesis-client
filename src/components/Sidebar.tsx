import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.aside`
  grid-area: sidebar;
  background-color: var(--primary);
  color: var(--background);
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
`;

const LogoWrapper = styled.div`
  border-right: solid 1px var(--border);
  background-color: var(--background);
  width: 100%;
  height: 4rem;
  color: var(--primary);
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 0 1rem;
  text-transform: uppercase;
`;

const LinkWrapper = styled.div`
  padding: 1rem;
`;

const NavLink = styled(Link)`
  display: block;
`;

const Logo = styled.span``;

const Sidebar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>MMAN4020 Thesis</Logo>
      </LogoWrapper>
      <LinkWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/manufacturers">Manufacturers</NavLink>
        <NavLink to="/distributors">Distributors</NavLink>
        <NavLink to="/map">Map</NavLink>
      </LinkWrapper>
    </Wrapper>
  );
};

export default Sidebar;
