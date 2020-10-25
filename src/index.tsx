import React from "react";
import ReactDOM from "react-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import App from "./App";
import Sidebar from "./components/Sidebar";
import AuthProvider from "./contexts/authContext";
import JsonProvider from "./contexts/jsonContext";
import GlobalLayout from "./layouts/GlobalLayout";
import { GlobalStyle, theme } from "./styles";

const queryCache = new QueryCache();

const Main = styled.main`
  grid-area: main;
  /* overflow: auto; */
`;

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <BrowserRouter>
        <AuthProvider>
          <JsonProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <GlobalLayout>
                <Sidebar />
                <Main>
                  <App />
                </Main>
              </GlobalLayout>
            </ThemeProvider>
          </JsonProvider>
        </AuthProvider>
      </BrowserRouter>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
