import { ethers } from "ethers";
// get provider
// provider can be metamask, infura, alchemy etc

interface AccountChangedProps {
    accounts: Array<string>;
}

const getProvider = (): any => {
    let provider;
    if (
        (window as any).ethereum !== null ||
        (window as any).ethereum !== undefined
    ) {
        provider = new ethers.providers.Web3Provider((window as any).ethereum);
    }

    return provider;
};

export const connectUserWallet = async () => {
    let accounts: Array<string>;
    const provider = await getProvider();
    accounts = await provider.send("eth_requestAccounts", []);

    if (accounts.length <= 0) {
        throw new Error("connect wallet to continue");
    }

    const signer = provider.getSigner();
    // for testing
    console.log(signer);
    console.log(accounts);
};

const onAccountChanged = async () => {
    try {
        await getProvider().on("accountsChanged", handleAccountChanged);
    } catch (error) {
        throw new Error((error as Object).toString());
    }

};

export const handleAccountChanged = async (
    accountChangedProps: AccountChangedProps
) => {
    let currentAccount = "";

    if (accountChangedProps.accounts[0] !== currentAccount) {
        currentAccount = accountChangedProps.accounts[0];
    }
};

export const handleUserAccounts = async () => {
    const accounts: Array<string> = await getProvider().request({
        method: "eth_accounts",
    });

    handleAccountChanged({ accounts: accounts });
};
