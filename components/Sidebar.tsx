import styled from "styled-components";

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

const Link = styled.span`
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
        <Link>Home</Link>
        <Link>Manufacturers</Link>
        <Link>Distributors</Link>
        <Link>Map</Link>
      </LinkWrapper>
    </Wrapper>
  );
};

export default Sidebar;
