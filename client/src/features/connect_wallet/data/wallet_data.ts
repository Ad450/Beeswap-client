import { ethers } from "ethers";
// get provider
// provider can be metamask, infura, alchemy etc

export const connectUserWallet = async () => {
    // get metamask provider
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    // request user permission to connect account
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    // for testing
    console.log(signer);

}