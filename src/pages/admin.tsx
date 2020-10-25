import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ReactJson from "react-json-view";
import { useJsonContext } from "../contexts/jsonContext";
import Batches from "./admin/batches";
import AssetUnits from "./admin/asset-units";
import Logistics from "./admin/logistics";
import Transports from "./admin/transport-units";
import TransportUnits from "./admin/transports";
import StockUnits from "./admin/stock-units";

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "nav json"
    "subpage json";
  padding: 1.5rem;
  height: 100%;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto;
`;

const Navigation = styled.nav`
  grid-area: nav;
`;

const StyledSwitch = styled(Switch)`
  grid-area: subpage;
`;

const Link = styled(NavLink)`
  margin-right: 0.5rem;

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
];

const Admin = () => {
  const match = useRouteMatch();
  const { src } = useJsonContext();

  return (
    <Layout>
      <Navigation>
        <h1>Admin Dashboard</h1>
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
          {/* <QueryForm identifier="gtin_serial_number" unitType="stock-unit" /> */}
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

export default Admin;
