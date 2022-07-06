import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import {
  BeeswapNormalText,
  BeeswapSmallText,
  BeeswapText,
} from "../../../core/Beeswap_components/Text";
import {
  BeeswapHeaderComponentProps,
  BeeswapMiddleComponentProps,
  BeeswapSvgProps,
} from "../../../core/interfaces/Beeswap_interfaces";
import { SwapPage } from "../../swap_tokens/UI/swap_tokens_page";

export const ConnectWallet = () => {
  // set to false for developing swap page
  const [isConnectWallet, setConnectWallet] = useState(true);

  const onConnectWalletClicked = () => {
    setConnectWallet(!isConnectWallet);
  };

  return (
    <Box
      bg="gray.900"
      w="100%"
      h="container.xl"
      p={4}
      color="white"
      padding={5}
    >
      <HeaderComponent
        isConnectWallet={isConnectWallet}
        isConnectWalletChanged={() => setConnectWallet(!isConnectWallet)}
      ></HeaderComponent>

      {isConnectWallet ? (
        <SwapPage></SwapPage>
      ) : (
        <MiddleComponent
          onConnectWalletClicked={() => setConnectWallet(!isConnectWallet)}
        ></MiddleComponent>
      )}
    </Box>
  );
};

const HeaderComponent = (
  beeswapHeaderComponentProps: BeeswapHeaderComponentProps
) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box>
        <BeeswapText text="Beeswap"></BeeswapText>
      </Box>
      <Spacer />
      <Box>
        {beeswapHeaderComponentProps.isConnectWallet? (
          <Button
            colorScheme="pink"
            variant="outline"
            onClick={() => beeswapHeaderComponentProps.isConnectWalletChanged()}
          >
            back
          </Button>
        ) : (
          <BeeswapSmallText text="stay in touch"></BeeswapSmallText>
        ) }
      </Box>
    </Flex>
  );
};

const MiddleComponent = (
  beeswapMiddleComponentProps: BeeswapMiddleComponentProps
) => {
  return (
    <Center h="60%">
      <Stack direction="column">
        <Box p={5} shadow="md">
          <BeeswapSvg height="300" width="300"></BeeswapSvg>
          <BeeswapNormalText text="Connect wallet to continue using Beeswap"></BeeswapNormalText>
        </Box>
        <Button
          colorScheme="pink"
          variant="outline"
          onClick={() => beeswapMiddleComponentProps.onConnectWalletClicked()}
        >
          <BeeswapNormalText text="Connect Metamask Wallet"></BeeswapNormalText>
        </Button>
      </Stack>
    </Center>
  );
};

export const BeeswapSvg = (beeswapSvgProps: BeeswapSvgProps) => {
  return (
    <object
      data="https://svgsilh.com/svg/896670.svg"
      width={beeswapSvgProps.width}
      height={beeswapSvgProps.height}
    >
      {" "}
    </object>
  );
};

// simple onClick to toggle pages
