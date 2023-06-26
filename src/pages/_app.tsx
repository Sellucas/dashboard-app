import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import { AppProps } from "next/app";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

type MyAppProps = {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
  session: any;
};

const App: React.FC<MyAppProps> = ({ Component, pageProps, session }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const darkThemeChosen = React.useMemo(
    () => createTheme({ ...darkTheme }),
    [mode]
  );

  const lightThemeChosen = React.useMemo(
    () => createTheme({ ...lightTheme }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
      >
        <SessionProvider session={session}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
