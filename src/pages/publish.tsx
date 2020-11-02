import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ReactJson from "react-json-view";
import { useJsonContext } from "../contexts/jsonContext";
import Batches from "./publish/batches";
import AssetUnits from "./publish/asset-units";
import Logistics from "./publish/logistics";
import TransportUnits from "./publish/transport-units";
import Transports from "./publish/transports";
import StockUnits from "./publish/stock-units";
import Locations from "./publish/locations";
import DisaggregateLogistic from "./publish/disaggregate-logistic";
import DisaggregateBatch from "./publish/disaggregate-batch";
import DisaggregateTransport from "./publish/disaggregate-transport";
import { breakpoints } from "../styles";

const Layout = styled.div`
  display: grid;
  padding: 1.5rem;
  height: 100%;
  grid-template-rows: minmax(10rem, auto);
  grid-template-columns: auto;
  grid-template-areas:
    "nav"
    "subpage"
    "json";
  overflow-y: auto;

  ${breakpoints.xl} {
    grid-template-areas:
      "nav json"
      "subpage json";
    grid-template-rows: auto 1fr;
    grid-template-columns: minmax(56rem, 1fr) auto;
  }
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 1.875rem;
  color: var(--primary);
`;

const LinkHeading = styled.h2`
  font-weight: 600;
  text-decoration: underline;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  margin-top: 0.75rem;
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

const links2 = [
  { to: "disaggregate-batch", text: "Batches" },
  { to: "disaggregate-logistic", text: "Logistics" },
  { to: "disaggregate-transport", text: "Transports" },
];

const Publish = () => {
  const match = useRouteMatch();
  const { src } = useJsonContext();

  return (
    <Layout>
      <Navigation>
        <Heading>Admin Dashboard</Heading>
        <LinkHeading>Create/Aggregate Entities</LinkHeading>
        <div>
          {links.map(({ to, text }) => (
            <Link to={`${match.url}/${to}`} key={to}>
              {text}
            </Link>
          ))}
        </div>
        <LinkHeading>Disaggregate Entities</LinkHeading>
        <div>
          {links2.map(({ to, text }) => (
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
        <Route path={`${match.url}/disaggregate-batch`}>
          <DisaggregateBatch />
        </Route>
        <Route path={`${match.url}/disaggregate-logistic`}>
          <DisaggregateLogistic />
        </Route>
        <Route path={`${match.url}/disaggregate-transport`}>
          <DisaggregateTransport />
        </Route>
        <Route path={`${match.url}`}>
          <p>Select the publish tool you'd like to use.</p>
        </Route>
      </StyledSwitch>
      <ReactJsonWrapper>
        <h3>JSON Result View</h3>
        <StyledReactJson src={src} />
      </ReactJsonWrapper>
    </Layout>
  );
};

export default Publish;
