import styled from "styled-components";

const GlobalLayout = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar main"
    "sidebar main"
    "sidebar footer";
  grid-template-columns: 12.5rem 1fr;
  grid-template-rows: auto 1fr auto;

  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: var(--background);
`;

export default GlobalLayout;
