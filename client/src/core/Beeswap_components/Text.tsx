import * as React from  "react";
import { Heading, Text } from "@chakra-ui/react";
import { BeeswapNormalTextProps, BeeswapSmallTextProps, BeeswapTextProps } from "../interfaces/Beeswap_interfaces";



 const BeeswapText = (beeswapTextProps: BeeswapTextProps)=>{
    return (
        <Heading color='pink'>{beeswapTextProps.text}</Heading>
    )
}

const BeeswapNormalText = (beeswapNormalTextProps: BeeswapNormalTextProps)=>{
    return (
        <Text fontSize='2xl'>{beeswapNormalTextProps.text}</Text>
    );
}

const BeeswapSmallText = (beeswapSmallTextProps: BeeswapSmallTextProps) =>{
    return (
        <Text color="pink" fontSize="lg"> {beeswapSmallTextProps.text} </Text>
    )
}


export {BeeswapText , BeeswapNormalText, BeeswapSmallText}