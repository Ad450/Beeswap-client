import * as React from "react";

import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { getProvider } from "../../../core/provider";
import { Center } from "@chakra-ui/react";

export const SwapPage = () => {
  // jsonrpcEndpoint
  const jsonRpcEndpoint = `https://mainnet.infura.io/v3/da05bcada3a947ffa1a7df8bac900e4d`;

  const provider = getProvider();
  return (
    <Center h="50%">
      <div className="Uniswap">
        <SwapWidget provider={provider} jsonRpcEndpoint={jsonRpcEndpoint} width= {600}/>
      </div>
    </Center>
  );
};

//     <Center h="40%">
//       <Stack direction="column">
//         <Center>
//           <BeeswapSvg height="300" width="300"></BeeswapSvg>
//         </Center>
//         <Box
//           p={5}
//           shadow="lg"
//           border="1px"
//           borderColor="gray.400"
//           width="lg"
//           borderRadius="md"
//         >
//           <Flex direction="row">
//             <Box>
//               <Tag>ETH</Tag>
//               <Box height="20px"></Box>
//               <Stack direction="column">
//                 <Box>
//                   <NumberInput maxW="150px">
//                     <NumberInputField />
//                     <NumberInputStepper>
//                       <NumberIncrementStepper />
//                       <NumberDecrementStepper />
//                     </NumberInputStepper>
//                   </NumberInput>
//                 </Box>
//               </Stack>
//             </Box>
//             <Spacer></Spacer>
//             <Box>
//               <Tag>DAI</Tag>
//               <Box height="20px"></Box>
//               <BeeswapSmallText text="2333"></BeeswapSmallText>
//             </Box>
//           </Flex>
//         </Box>
//         <CollapseEx text="Confirm action"></CollapseEx>
//       </Stack>
//     </Center>
//   );
// };

// const CollapseEx = (beeswapCollapseExProps: BeeswapCollapseExProps) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <>
//       <Button onClick={onToggle} bg="teal">
//         Swap Tokens
//       </Button>
//       <Collapse in={isOpen} animateOpacity>
//         <Box
//           p="40px"
//           color="white"
//           mt="4"
//           bg="teal.500"
//           rounded="md"
//           shadow="md"
//         >
//           {beeswapCollapseExProps.text}

//           <Button color="teal" marginLeft="40" >
//             Confirm swap
//           </Button>
//         </Box>
//       </Collapse>
//     </>
//   );
// };
