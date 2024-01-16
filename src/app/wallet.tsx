'use client'
import React from 'react';
import { WagmiConfig, createConfig,useAccount } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const Wallet: React.FC = () => {
  // const { address, isConnecting, isDisconnected } = useAccount();
    const config = createConfig(
        getDefaultConfig({
          infuraId: process.env.INFURA_ID,
          walletConnectProjectId: (process.env.PROJECT_ID as string),
          appName: "GhoCredit"
        }),
      );
  return (
    <div>
        <WagmiConfig config={config}>
            <ConnectKitProvider debugMode>
                <ConnectKitButton />
            </ConnectKitProvider>
        </WagmiConfig>
    </div>
  )
}
export default Wallet;