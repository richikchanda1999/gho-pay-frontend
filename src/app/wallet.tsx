'use client'

import React from 'react';
import { WagmiConfig, createConfig,useAccount } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
const chains = [mainnet, polygon, optimism, arbitrum];
import Connect from './connect';
const Wallet: React.FC = () => {
    const config = createConfig(
        getDefaultConfig({
          infuraId: process.env.INFURA_ID,
          walletConnectProjectId: (process.env.PROJECT_ID as string),
          chains,
          appName: "GhoCredit"
        }),
      );
  return (
    <div>
        <WagmiConfig config={config}>
            <ConnectKitProvider debugMode>
              <div
                className="mb-3 text-2xl font-semi-light ">
                  <Connect/>
              </div>
                
              <ConnectKitButton />
            </ConnectKitProvider>
        </WagmiConfig>
    </div>
  )
}
export default Wallet;