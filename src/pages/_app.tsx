import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarContextProvider } from "../context/SidebarContext";
import { makeServer } from "../services/mirage";
import { QueryClientProvider, QueryClient } from "react-query";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarContextProvider>
          <Component {...pageProps} />
        </SideBarContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
