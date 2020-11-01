import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ReactJson from "react-json-view";
import { useJsonContext } from "../contexts/jsonContext";
import Batches from "./query/batches";
import AssetUnits from "./query/asset-units";
import Logistics from "./query/logistics";
import TransportUnits from "./query/transport-units";
import Transports from "./query/transports";
import StockUnits from "./query/stock-units";
import Locations from "./query/locations";

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "nav json"
    "subpage json";
  padding: 1.5rem;
  height: 100%;
  grid-template-rows: auto 1fr;
  grid-template-columns: minmax(56rem, 1fr) auto;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 1.875rem;
  color: var(--primary);
`;

const Navigation = styled.nav`
  grid-area: nav;
`;

const StyledSwitch = styled(Switch)`
  grid-area: subpage;
`;

const Link = styled(NavLink)`
  margin-right: 0.5rem;
  font-weight: 600;
  color: var(--primary);

  &.active {
    text-decoration: underline;
  }
`;

const ReactJsonWrapper = styled.section`
  grid-area: json;
  border-left: 1px solid var(--border);
  padding: 0 1rem;
  min-height: 100%;
  width: 45rem;
  overflow: auto;
`;
const StyledReactJson = styled(ReactJson)`
  width: 100%;
`;

const links = [
  { to: "stock-units", text: "Stock Units" },
  { to: "batches", text: "Batches" },
  { to: "logistics", text: "Logistics" },
  { to: "asset-units", text: "Asset Units" },
  { to: "transports", text: "Transport" },
  { to: "transport-units", text: "Transport Units" },
  { to: "locations", text: "Locations" },
];

const Query = () => {
  const match = useRouteMatch();
  const { src } = useJsonContext();

  return (
    <Layout>
      <Navigation>
        <Heading>Admin Dashboard</Heading>
        <div>
          {links.map(({ to, text }) => (
            <Link to={`${match.url}/${to}`} key={to}>
              {text}
            </Link>
          ))}
        </div>
      </Navigation>
      <StyledSwitch>
        <Route path={`${match.url}/stock-units`}>
          <StockUnits />
        </Route>
        <Route path={`${match.url}/batches`}>
          <Batches />
        </Route>
        <Route path={`${match.url}/logistics`}>
          <Logistics />
        </Route>
        <Route path={`${match.url}/asset-units`}>
          <AssetUnits />
        </Route>
        <Route path={`${match.url}/transports`}>
          <Transports />
        </Route>
        <Route path={`${match.url}/transport-units`}>
          <TransportUnits />
        </Route>
        <Route path={`${match.url}/locations`}>
          <Locations />
        </Route>
        <Route path={`${match.url}`}>
          <p>Select the query tool you'd like to use.</p>
        </Route>
      </StyledSwitch>
      <ReactJsonWrapper>
        <h3>JSON Result View</h3>
        <StyledReactJson src={src} />
      </ReactJsonWrapper>
    </Layout>
  );
};

export default Query;
