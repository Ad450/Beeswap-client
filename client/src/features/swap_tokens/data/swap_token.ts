import { ethers } from "ethers";
import UniswapAbi from "./contract_abi.json";

interface GetContractProps {
    address: string;
}

interface SwapTokensProps {
    contractAddress: string;
    path: Array<string>;
    recipient: string;
}

const getContract = async (getContractProps: GetContractProps) => {
    try {
        // provide ethers with a specific network provider
        const provider = new ethers.providers.Web3Provider(
            (window as any).ethereum
        );
        // get contract address
        const contract = new ethers.Contract(
            getContractProps.address,
            UniswapAbi,
            provider
        );
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const swapTokens = async (swapTokensProps: SwapTokensProps) => {
    let contract: any;
    try {
        contract = await getContract({ address: swapTokensProps.contractAddress });
        // amountOutMin = 0 for now
        // need to set deadline for transaction
        let deadline: string = (Date.now() + (10 * 60 * 60 * 1000)).toString();
        contract.swapExactETHForTokens(0, swapTokensProps.path, swapTokensProps.recipient, deadline,)
    } catch (error) {

    }
};
