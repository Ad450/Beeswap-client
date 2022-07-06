import { ethers } from "ethers";
import { getSigner } from "../../../core/provider";
import UniswapAbi from "./contract_abi.json";

interface GetContractProps {
    address: string;
}

interface SwapTokensProps {
    contractAddress: string;
    path: Array<string>;
    recipient: string;
    from: string;
    value: Number;
}

const getContract = async (getContractProps: GetContractProps) => {
    try {
        // provide signer from wallet
        const signer = await getSigner();
        // get contract address
        const contract = new ethers.Contract(
            getContractProps.address,
            UniswapAbi,
            await signer
        );
        return contract;
    } catch (error) {
        console.log(error);
    }
};

export const swapETHForTokens = async (swapTokensProps: SwapTokensProps) => {
    let contract: any;
    try {
        contract = await getContract({ address: swapTokensProps.contractAddress });
        // amountOutMin = 0 for now
        // need to set deadline for transaction
        let deadline: string = (Date.now() + 10 * 60 * 60 * 1000).toString(); // deadline set to 10 hours
        // call uniswap swapExactETHforTokens
        const transaction = await contract.swapExactETHForTokens(
            0,
            swapTokensProps.path,
            swapTokensProps.recipient,
            deadline,
            {
                from: swapTokensProps.from,
                value: ethers.utils.formatUnits(`${swapTokensProps.value}`, "wei"),
                gasLimit: 3000000,
            } // gas limit set to 3000000 for testing
        );

        await transaction.wait();
        console.log(transaction);
    } catch (error) {
        console.log(error);
    }
};
