import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarContextProvider } from "../context/SidebarContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SideBarContextProvider>
        <Component {...pageProps} />
      </SideBarContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
