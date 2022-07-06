export interface BeeswapTextProps {
    text: string;
}
export interface BeeswapNormalTextProps {
    text: string;
}

export interface BeeswapSmallTextProps {
    text: string;
}

export interface BeeswapSvgProps {
    width: string;
    height: string;
}

export interface BeeswapCollapseExProps {
    text: string;
    activateSwap: Function
}

export interface BeeswapMiddleComponentProps {
    onConnectWalletClicked: Function;
}

export interface BeeswapHeaderComponentProps {
    isConnectWallet: boolean;
    isConnectWalletChanged: Function;
}