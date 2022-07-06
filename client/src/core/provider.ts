import { ethers } from "ethers";

export const getProvider = (): any => {
    let provider;
    if (
        (window as any).ethereum !== null ||
        (window as any).ethereum !== undefined
    ) {
        provider = new ethers.providers.Web3Provider((window as any).ethereum);
    }

    return provider;
};

export const getSigner = async () => {
    let signer;
    const provider = await getProvider();
    signer = provider.getSigner();
    return signer;
};
