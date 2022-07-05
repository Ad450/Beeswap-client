import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ConnectWallet } from "./features/connect_wallet_page";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ConnectWallet></ConnectWallet>
  </ChakraProvider>
);
