import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
// import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GlobalLayout from "../layouts/GlobalLayout";
import { GlobalStyle, theme } from "../styles";

const Main = styled.main`
  grid-area: main;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalLayout>
          {/* <Navbar /> */}
          <Sidebar />
          <Main>
            <Component {...pageProps} />
          </Main>
        </GlobalLayout>
      </ThemeProvider>
    </>
  );
}
